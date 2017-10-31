export function handleSpinCustom () {
    this.$Spin.show({
        render: (h) => {
            return h('div', [
                h('Icon', {
                    'class': 'demo-spin-icon-load',
                    props: {
                        type: 'load-c',
                        size: 18
                    }
                }),
                h('div', 'Loading')
            ])
        }
    })
    setTimeout(() => {
        this.$Spin.hide()
    }, 3000)
}