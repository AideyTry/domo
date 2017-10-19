export default function assignRole (number) {
    let OFFLINE_ORDER = {
            ADMIN: filter(1, number), // 管理员
            AGENCY: filter(1 << 1, number), // 经销商
            STAFF: filter(1 << 2, number) // 客服
    }
    function filter (code, number) {
       return (code & number) === code
    }
    return OFFLINE_ORDER
}