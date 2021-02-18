export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#FF9F00",
    SUPPORTED_DEVICES: [
        {
            name: "Alcatel Tetra",
            model: "U50A_ATT",
        },
        {
            name: "Alcatel Idol 5",
            model: "simba6_cricket",
        },
        {
            name: "Alcatel TCL A1",
            model: "U50A_PLUS_TF",
        },
        {
            name: "Alcatel 1X",
            model: "U50A_PLUS_ATT",
        },
    ],
    RELEASE_VARIANTS: {
        teamwin: {
            description: "Official Team Win Recovery Project.",
            suffix: " TWRP",
        },
        orangefox: {
            description:
                "Unofficial/not-yet-official Orange Fox Recovery Project.",
            suffix: " OFRP",
        },
        pitchblack: {
            description:
                "Unofficial/not-yet-official Pitch Black Recovery Project.",
            suffix: " PBRP",
        },
        skyhawk: {
            description:
                "Unofficial/not-yet-official Sky Hawk Recovery Project.",
            suffix: " SHRP",
        },
        dark: {
            description:
                "Unofficial/not-yet-official Dark Recovery Project.",
            suffix: " DRP",
        },
        batik: {
            description:
                "Unofficial/not-yet-official Batik Recovery Project.",
            suffix: " BRP",
        },
        nusantara: {
            description:
                "Unofficial/not-yet-official Nusantara Recovery Project.",
            suffix: " NRP",
        },
        redwolf: {
            description:
                "Unofficial/not-yet-official Red Wolf Recovery Project.",
            suffix: " RWRP",
        },
    },
    DONATION_LINKS: [
        {
            title: "Paypal Donation Link",
            description:
                "If you are able to, please consider making a donation through PayPal. This allows us to support this and other projects now and in the future.",
            highlight: true,
            url: "https://paypal.me/PizzaG98",
            icon: "paypal",
        },
        {
            title: "Tips",
            description:
                "If (for any reason at all) you would like to tip a specific member of our team, you can do so by adding that members screen name in comments when donating.",
            highlight: false,
            url: "https://paypal.me/PizzaG98",
            icon: "paypal",
        },
    ],
};
