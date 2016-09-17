

export interface CurrencyCode {
    code: string;
    country: string;
}

const currencyCodesToCountry = {
'AED':'United Arab Emirates Dirham',
'AFN':'Afghanistan Afghani',
'ALL':'Albania Lek',
'AMD':'Armenia Dram',
'ANG':'Netherlands Antilles Guilder',
'AOA':'Angola Kwanza',
'ARS':'Argentina Peso',
'AUD':'Australia Dollar',
'AWG':'Aruba Guilder',
'AZN':'Azerbaijan New Manat',
'BAM':'Bosnia and Herzegovina Convertible Marka',
'BBD':'Barbados Dollar',
'BDT':'Bangladesh Taka',
'BGN':'Bulgaria Lev',
'BHD':'Bahrain Dinar',
'BIF':'Burundi Franc',
'BMD':'Bermuda Dollar',
'BND':'Brunei Darussalam Dollar',
'BOB':'Bolivia Bolíviano',
'BRL':'Brazil Real',
'BSD':'Bahamas Dollar',
'BTN':'Bhutan Ngultrum',
'BWP':'Botswana Pula',
'BYR':'Belarus Ruble',
'BZD':'Belize Dollar',
'CAD':'Canada Dollar',
'CDF':'Congo/Kinshasa Franc',
'CHF':'Switzerland Franc',
'CLP':'Chile Peso',
'CNY':'China Yuan Renminbi',
'COP':'Colombia Peso',
'CRC':'Costa Rica Colon',
'CUC':'Cuba Convertible Peso',
'CUP':'Cuba Peso',
'CVE':'Cape Verde Escudo',
'CZK':'Czech Republic Koruna',
'DJF':'Djibouti Franc',
'DKK':'Denmark Krone',
'DOP':'Dominican Republic Peso',
'DZD':'Algeria Dinar',
'EGP':'Egypt Pound',
'ERN':'Eritrea Nakfa',
'ETB':'Ethiopia Birr',
'EUR':'Euro Member Countries',
'FJD':'Fiji Dollar',
'FKP':'Falkland Islands (Malvinas) Pound',
'GBP':'United Kingdom Pound',
'GEL':'Georgia Lari',
'GGP':'Guernsey Pound',
'GHS':'Ghana Cedi',
'GIP':'Gibraltar Pound',
'GMD':'Gambia Dalasi',
'GNF':'Guinea Franc',
'GTQ':'Guatemala Quetzal',
'GYD':'Guyana Dollar',
'HKD':'Hong Kong Dollar',
'HNL':'Honduras Lempira',
'HRK':'Croatia Kuna',
'HTG':'Haiti Gourde',
'HUF':'Hungary Forint',
'IDR':'Indonesia Rupiah',
'ILS':'Israel Shekel',
'IMP':'Isle of Man Pound',
'INR':'India Rupee',
'IQD':'Iraq Dinar',
'IRR':'Iran Rial',
'ISK':'Iceland Krona',
'JEP':'Jersey Pound',
'JMD':'Jamaica Dollar',
'JOD':'Jordan Dinar',
'JPY':'Japan Yen',
'KES':'Kenya Shilling',
'KGS':'Kyrgyzstan Som',
'KHR':'Cambodia Riel',
'KMF':'Comoros Franc',
'KPW':'Korea (North) Won',
'KRW':'Korea (South) Won',
'KWD':'Kuwait Dinar',
'KYD':'Cayman Islands Dollar',
'KZT':'Kazakhstan Tenge',
'LAK':'Laos Kip',
'LBP':'Lebanon Pound',
'LKR':'Sri Lanka Rupee',
'LRD':'Liberia Dollar',
'LSL':'Lesotho Loti',
'LYD':'Libya Dinar',
'MAD':'Morocco Dirham',
'MDL':'Moldova Leu',
'MGA':'Madagascar Ariary',
'MKD':'Macedonia Denar',
'MMK':'Myanmar (Burma) Kyat',
'MNT':'Mongolia Tughrik',
'MOP':'Macau Pataca',
'MRO':'Mauritania Ouguiya',
'MUR':'Mauritius Rupee',
'MVR':'Maldives (Maldive Islands) Rufiyaa',
'MWK':'Malawi Kwacha',
'MXN':'Mexico Peso',
'MYR':'Malaysia Ringgit',
'MZN':'Mozambique Metical',
'NAD':'Namibia Dollar',
'NGN':'Nigeria Naira',
'NIO':'Nicaragua Cordoba',
'NOK':'Norway Krone',
'NPR':'Nepal Rupee',
'NZD':'New Zealand Dollar',
'OMR':'Oman Rial',
'PAB':'Panama Balboa',
'PEN':'Peru Sol',
'PGK':'Papua New Guinea Kina',
'PHP':'Philippines Peso',
'PKR':'Pakistan Rupee',
'PLN':'Poland Zloty',
'PYG':'Paraguay Guarani',
'QAR':'Qatar Riyal',
'RON':'Romania New Leu',
'RSD':'Serbia Dinar',
'RUB':'Russia Ruble',
'RWF':'Rwanda Franc',
'SAR':'Saudi Arabia Riyal',
'SBD':'Solomon Islands Dollar',
'SCR':'Seychelles Rupee',
'SDG':'Sudan Pound',
'SEK':'Sweden Krona',
'SGD':'Singapore Dollar',
'SHP':'Saint Helena Pound',
'SLL':'Sierra Leone Leone',
'SOS':'Somalia Shilling',
'SPL':'Seborga Luigino',
'SRD':'Suriname Dollar',
'STD':'São Tomé and Príncipe Dobra',
'SVC':'El Salvador Colon',
'SYP':'Syria Pound',
'SZL':'Swaziland Lilangeni',
'THB':'Thailand Baht',
'TJS':'Tajikistan Somoni',
'TMT':'Turkmenistan Manat',
'TND':'Tunisia Dinar',
'TOP':'Tonga Pa\'anga',
'TRY':'Turkey Lira',
'TTD':'Trinidad and Tobago Dollar',
'TVD':'Tuvalu Dollar',
'TWD':'Taiwan New Dollar',
'TZS':'Tanzania Shilling',
'UAH':'Ukraine Hryvnia',
'UGX':'Uganda Shilling',
'USD':'United States Dollar',
'UYU':'Uruguay Peso',
'UZS':'Uzbekistan Som',
'VEF':'Venezuela Bolivar',
'VND':'Viet Nam Dong',
'VUV':'Vanuatu Vatu',
'WST':'Samoa Tala',
'XAF':'Communauté Financière Africaine (BEAC) CFA Franc BEAC',
'XCD':'East Caribbean Dollar',
'XDR':'International Monetary Fund (IMF) Special Drawing Rights',
'XOF':'Communauté Financière Africaine (BCEAO) Franc',
'XPF':'Comptoirs Français du Pacifique (CFP) Franc',
'YER':'Yemen Rial',
'ZAR':'South Africa Rand',
'ZMW':'Zambia Kwacha',
'ZWD':'Zimbabwe Dollar'
}

export const currencyCodes:{
    AED?:string;
AFN?:string;
ALL?:string;
AMD?:string;
ANG?:string;
AOA?:string;
ARS?:string;
AUD?:string;
AWG?:string;
AZN?:string;
BAM?:string;
BBD?:string;
BDT?:string;
BGN?:string;
BHD?:string;
BIF?:string;
BMD?:string;
BND?:string;
BOB?:string;
BRL?:string;
BSD?:string;
BTN?:string;
BWP?:string;
BYR?:string;
BZD?:string;
CAD?:string;
CDF?:string;
CHF?:string;
CLP?:string;
CNY?:string;
COP?:string;
CRC?:string;
CUC?:string;
CUP?:string;
CVE?:string;
CZK?:string;
DJF?:string;
DKK?:string;
DOP?:string;
DZD?:string;
EGP?:string;
ERN?:string;
ETB?:string;
EUR?:string;
FJD?:string;
FKP?:string;
GBP?:string;
GEL?:string;
GGP?:string;
GHS?:string;
GIP?:string;
GMD?:string;
GNF?:string;
GTQ?:string;
GYD?:string;
HKD?:string;
HNL?:string;
HRK?:string;
HTG?:string;
HUF?:string;
IDR?:string;
ILS?:string;
IMP?:string;
INR?:string;
IQD?:string;
IRR?:string;
ISK?:string;
JEP?:string;
JMD?:string;
JOD?:string;
JPY?:string;
KES?:string;
KGS?:string;
KHR?:string;
KMF?:string;
KPW?:string;
KRW?:string;
KWD?:string;
KYD?:string;
KZT?:string;
LAK?:string;
LBP?:string;
LKR?:string;
LRD?:string;
LSL?:string;
LYD?:string;
MAD?:string;
MDL?:string;
MGA?:string;
MKD?:string;
MMK?:string;
MNT?:string;
MOP?:string;
MRO?:string;
MUR?:string;
MVR?:string;
MWK?:string;
MXN?:string;
MYR?:string;
MZN?:string;
NAD?:string;
NGN?:string;
NIO?:string;
NOK?:string;
NPR?:string;
NZD?:string;
OMR?:string;
PAB?:string;
PEN?:string;
PGK?:string;
PHP?:string;
PKR?:string;
PLN?:string;
PYG?:string;
QAR?:string;
RON?:string;
RSD?:string;
RUB?:string;
RWF?:string;
SAR?:string;
SBD?:string;
SCR?:string;
SDG?:string;
SEK?:string;
SGD?:string;
SHP?:string;
SLL?:string;
SOS?:string;
SPL?:string;
SRD?:string;
STD?:string;
SVC?:string;
SYP?:string;
SZL?:string;
THB?:string;
TJS?:string;
TMT?:string;
TND?:string;
TOP?:string;
TRY?:string;
TTD?:string;
TVD?:string;
TWD?:string;
TZS?:string;
UAH?:string;
UGX?:string;
USD?:string;
UYU?:string;
UZS?:string;
VEF?:string;
VND?:string;
VUV?:string;
WST?:string;
XAF?:string;
XCD?:string;
XDR?:string;
XOF?:string;
XPF?:string;
YER?:string;
ZAR?:string;
ZMW?:string;
ZWD?:string;
}= {};

export const currenciesByCode: {[code:string]:CurrencyCode;} = {};
export const currencies: CurrencyCode[] = [];
for (let code of Object.keys(currencyCodesToCountry)){
    currencyCodes[code] = code;
    let currencyCode:CurrencyCode = {
        code,
        country: currencyCodesToCountry[code]
    };  
    Object.freeze(currencyCode);
    currencies.push(currencyCode);
    currenciesByCode[code] = currencyCode;
}
Object.freeze(currenciesByCode);
Object.freeze(currencyCodes);

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