module.exports = {
    presets: [["@babel/preset-env",{
        useBuiltIns: "usage", // 폴
        corejs: {
            // 폴리필 버전 지정
            version: 2,
        },// 리필 사용 방식 지정
        targets: {
            chrome: '79', // 크롬 버전 지원
            ie:'11', // 익스 버전 지원
        }
    }]],
}
