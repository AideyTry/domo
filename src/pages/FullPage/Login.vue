<style>

</style>

<template>
	<div class="login">
		<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
			<Row type="flex" justify="center" align="middle" class="code-row-bg">
				<Col span="8">
					<FormItem prop="username">
						<Input type="text" v-model="formInline.username" placeholder="Username">
							<Icon type="ios-person-outline" slot="prepend"></Icon>
						</Input>
					</FormItem>
				</Col>
			</Row>
			<Row type="flex" justify="center" align="middle" class="code-row-bg">
				<Col span="8">
					<FormItem prop="password">
						<Input type="password" v-model="formInline.password" placeholder="Password">
							<Icon type="ios-locked-outline" slot="prepend"></Icon>
						</Input>
					</FormItem>
				</Col>
			</Row>
			<Row type="flex" justify="center" align="middle" class="code-row-bg">
				<Col span="8">
					<FormItem>
						<Button type="primary" @click="login('formInline', formInline)">登录</Button>
					</FormItem>
				</Col>
			</Row>
		</Form>
	</div>
</template>
<script>
	// import { getToken } from '../../mock/m_users'
	import { getToken } from '../../api/users'
    import md5 from 'js-md5'
	export default {
		data () {
			return {
                username: '',
                password: '',
                err: false,
				errmsg: '',
				formInline: {
                    username: '',
                    password: ''
                },
                ruleInline: {
                    username: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
			}
		},
		methods: {
			login (name, userInfo) {
				console.log('userInfo=', userInfo)
				let params = { acc: userInfo.username, pwd: md5(userInfo.password) }
				this.$refs[name].validate((valid) => {
                    if (valid) {
						// console.log('params=', params)
						getToken(JSON.stringify(params)).then((res) => {
							console.log('res=', res)
							if (res.data.result === 0) {
								let cook = res.data.data
								this.$cookie.set('login', cook)
								this.$router.push({ path: '/purchase' })
							} else {
								this.$Message.error('用户名或密码错误!')
							}
							// if (res.data.code !== -1) {
							// 	this.$Message.success('登录成功!')
							// 	let userInfo = res.data.userInfo
							// 	console.log('store=', this.$store)
							// 	this.$store.commit('initUserInfo', userInfo)
							// 	this.$cookie.set('login', userInfo)
							// 	this.$router.push({ path: '/purchase' })
							// 	let vm = this
							// 	setTimeout(function () {
							// 		console.log('userInfo==', vm.$store.getters)
							// 	}, 1000)
							// } else {
							// 	this.$Message.error('用户名或密码错误!')
							// }
						}, (error) => {
							console.log(error)
						}).catch((err) => {
							console.log(err)
						})
                    }
                })
			}
		},
		munted () {
			this.login()
		}
	}
</script>


