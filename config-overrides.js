// Override webpack configurations
const { override, useBabelRc } = require("customize-cra");

module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc() // Vì thư viện create react app tích hợp công cụ hỗ trợ rule viết code, nên khi thấy tên hàm bắt đầu bằng use nó hiểu là hook của react
)