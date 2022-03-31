export const leftBounceAnim = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: number): object => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.025}
    })
}
