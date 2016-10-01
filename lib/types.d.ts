export interface CurrencyCode {
    code: string;
    country: string;
}
export declare const currencyCodes: {
    AED?: string;
    AFN?: string;
    ALL?: string;
    AMD?: string;
    ANG?: string;
    AOA?: string;
    ARS?: string;
    AUD?: string;
    AWG?: string;
    AZN?: string;
    BAM?: string;
    BBD?: string;
    BDT?: string;
    BGN?: string;
    BHD?: string;
    BIF?: string;
    BMD?: string;
    BND?: string;
    BOB?: string;
    BRL?: string;
    BSD?: string;
    BTN?: string;
    BWP?: string;
    BYR?: string;
    BZD?: string;
    CAD?: string;
    CDF?: string;
    CHF?: string;
    CLP?: string;
    CNY?: string;
    COP?: string;
    CRC?: string;
    CUC?: string;
    CUP?: string;
    CVE?: string;
    CZK?: string;
    DJF?: string;
    DKK?: string;
    DOP?: string;
    DZD?: string;
    EGP?: string;
    ERN?: string;
    ETB?: string;
    EUR?: string;
    FJD?: string;
    FKP?: string;
    GBP?: string;
    GEL?: string;
    GGP?: string;
    GHS?: string;
    GIP?: string;
    GMD?: string;
    GNF?: string;
    GTQ?: string;
    GYD?: string;
    HKD?: string;
    HNL?: string;
    HRK?: string;
    HTG?: string;
    HUF?: string;
    IDR?: string;
    ILS?: string;
    IMP?: string;
    INR?: string;
    IQD?: string;
    IRR?: string;
    ISK?: string;
    JEP?: string;
    JMD?: string;
    JOD?: string;
    JPY?: string;
    KES?: string;
    KGS?: string;
    KHR?: string;
    KMF?: string;
    KPW?: string;
    KRW?: string;
    KWD?: string;
    KYD?: string;
    KZT?: string;
    LAK?: string;
    LBP?: string;
    LKR?: string;
    LRD?: string;
    LSL?: string;
    LYD?: string;
    MAD?: string;
    MDL?: string;
    MGA?: string;
    MKD?: string;
    MMK?: string;
    MNT?: string;
    MOP?: string;
    MRO?: string;
    MUR?: string;
    MVR?: string;
    MWK?: string;
    MXN?: string;
    MYR?: string;
    MZN?: string;
    NAD?: string;
    NGN?: string;
    NIO?: string;
    NOK?: string;
    NPR?: string;
    NZD?: string;
    OMR?: string;
    PAB?: string;
    PEN?: string;
    PGK?: string;
    PHP?: string;
    PKR?: string;
    PLN?: string;
    PYG?: string;
    QAR?: string;
    RON?: string;
    RSD?: string;
    RUB?: string;
    RWF?: string;
    SAR?: string;
    SBD?: string;
    SCR?: string;
    SDG?: string;
    SEK?: string;
    SGD?: string;
    SHP?: string;
    SLL?: string;
    SOS?: string;
    SPL?: string;
    SRD?: string;
    STD?: string;
    SVC?: string;
    SYP?: string;
    SZL?: string;
    THB?: string;
    TJS?: string;
    TMT?: string;
    TND?: string;
    TOP?: string;
    TRY?: string;
    TTD?: string;
    TVD?: string;
    TWD?: string;
    TZS?: string;
    UAH?: string;
    UGX?: string;
    USD?: string;
    UYU?: string;
    UZS?: string;
    VEF?: string;
    VND?: string;
    VUV?: string;
    WST?: string;
    XAF?: string;
    XCD?: string;
    XDR?: string;
    XOF?: string;
    XPF?: string;
    YER?: string;
    ZAR?: string;
    ZMW?: string;
    ZWD?: string;
};
export declare const currenciesByCode: {
    [code: string]: CurrencyCode;
};
export declare const currencies: CurrencyCode[];
/**
 * Specifies an amount of a currency
 */
export interface CurrencyAmount {
    /**
     * The amount in cents
     */
    amount: number;
    /**
     * The currency code for the transaction amount
     */
    currencyCode: string;
}
