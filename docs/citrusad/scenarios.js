(function() {
    window.citrusAdScenarios = [
        {
            name: "Search placement",
            data: {
                customerId: "wertg5432a",
                sessionId: "ec9-4e07-881d-3e9",
                dtmCookieId: "AAAF8xLBTA968AB6TOthAAAAAAE",
                placement: "search",
                catalogId: "628dbe95-2ec9-4e07-881d-3e9f92ab2e0b",
                searchTerm: "chocolate",
                options: {
                    filterMode: "AndOr"
                },
                contentStandardId: "fec2ab89-7a29-42b5-b58a-5675688b52d9",
                bannerSlots: [
                    {
                        slotId: "banner-top",
                        maxNumberOfAds: 1
                    },
                    {
                        slotId: "banner-side",
                        maxNumberOfAds: 2
                    }
                ],
                maxNumberOfAds: 3
            }
        },
        {
            name: "Category placement",
            defaultSelected: true,
            data: {
                customerId: "wertg5432a",
                sessionId: "ec9-4e07-881d-3e9",
                dtmCookieId: "AAAF8xLBTA968AB6TOthAAAAAAE",
                placement: "category",
                catalogId: "628dbe95-2ec9-4e07-881d-3e9f92ab2e0b",
                productFilters: [
                    [
                        "category:Cupboard/Snacks"
                    ]
                ],
                options: {
                    filterMode: "AndOr"
                },
                contentStandardId: "fec2ab89-7a29-42b5-b58a-5675688b52d9",
                bannerSlots: [
                    {
                        slotId: "banner-top",
                        maxNumberOfAds: 1
                    },
                    {
                        slotId: "banner-side",
                        maxNumberOfAds: 2
                    }
                ],
                maxNumberOfAds: 3
            }
        },
        {
            name: "Cross-sell category placement",
            data: {
                customerId: "wertg5432a",
                sessionId: "ec9-4e07-881d-3e9",
                dtmCookieId: "AAAF8xLBTA968AB6TOthAAAAAAE",
                placement: "category-cross-sell",
                catalogId: "628dbe95-2ec9-4e07-881d-3e9f92ab2e0b",
                productFilters: [
                    [
                        "category:Cupboard/Snacks"
                    ]
                ],
                options: {
                    filterMode: "AndOr"
                },
                contentStandardId: "fec2ab89-7a29-42b5-b58a-5675688b52d9",
                bannerSlots: [
                    {
                        slotId: "banner-top",
                        maxNumberOfAds: 1
                    },
                    {
                        slotId: "banner-side",
                        maxNumberOfAds: 2
                    }
                ],
                maxNumberOfAds: 3
            }
        },
        {
            name: "Broad match placement",
            data: {
                customerId: "wertg5432a",
                sessionId: "ec9-4e07-881d-3e9",
                dtmCookieId: "AAAF8xLBTA968AB6TOthAAAAAAE",
                placement: "home",
                catalogId: "628dbe95-2ec9-4e07-881d-3e9f92ab2e0b",
                productFilters: [
                    []
                ],
                options: {
                    filterMode: "AndOr"
                },
                contentStandardId: "fec2ab89-7a29-42b5-b58a-5675688b52d9",
                bannerSlots: [
                    {
                        slotId: "banner-top",
                        maxNumberOfAds: 1
                    },
                    {
                        slotId: "banner-side",
                        maxNumberOfAds: 2
                    }
                ],
                maxNumberOfAds: 3
            }
        }
    ];
})();