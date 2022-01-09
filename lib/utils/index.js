'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('config:intl-input');
var schemas = require('part:@sanity/base/schema');
var client = require('part:@sanity/base/client');
var _asyncToGenerator = require('@babel/runtime/helpers/asyncToGenerator');
var _regeneratorRuntime = require('@babel/runtime/regenerator');
var languagesLoaderFn = require('part:sanity-plugin-intl-input/languages/loader?');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var config__default = /*#__PURE__*/_interopDefaultLegacy(config);
var schemas__default = /*#__PURE__*/_interopDefaultLegacy(schemas);
var client__default = /*#__PURE__*/_interopDefaultLegacy(client);
var _asyncToGenerator__default = /*#__PURE__*/_interopDefaultLegacy(_asyncToGenerator);
var _regeneratorRuntime__default = /*#__PURE__*/_interopDefaultLegacy(_regeneratorRuntime);
var languagesLoaderFn__default = /*#__PURE__*/_interopDefaultLegacy(languagesLoaderFn);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);

var getSchema = function getSchema(name) {
  return schemas__default["default"]._original.types.find(function (s) {
    return s.name === name;
  });
};

var LanguageCultures = [{
  value: 'af',
  title: 'Afrikaans'
}, {
  value: 'af-ZA',
  title: 'Afrikaans (South Africa)'
}, {
  value: 'ar',
  title: 'Arabic'
}, {
  value: 'ar-AE',
  title: 'Arabic (U.A.E.)'
}, {
  value: 'ar-BH',
  title: 'Arabic (Bahrain)'
}, {
  value: 'ar-DZ',
  title: 'Arabic (Algeria)'
}, {
  value: 'ar-EG',
  title: 'Arabic (Egypt)'
}, {
  value: 'ar-IQ',
  title: 'Arabic (Iraq)'
}, {
  value: 'ar-JO',
  title: 'Arabic (Jordan)'
}, {
  value: 'ar-KW',
  title: 'Arabic (Kuwait)'
}, {
  value: 'ar-LB',
  title: 'Arabic (Lebanon)'
}, {
  value: 'ar-LY',
  title: 'Arabic (Libya)'
}, {
  value: 'ar-MA',
  title: 'Arabic (Morocco)'
}, {
  value: 'ar-OM',
  title: 'Arabic (Oman)'
}, {
  value: 'ar-QA',
  title: 'Arabic (Qatar)'
}, {
  value: 'ar-SA',
  title: 'Arabic (Saudi Arabia)'
}, {
  value: 'ar-SY',
  title: 'Arabic (Syria)'
}, {
  value: 'ar-TN',
  title: 'Arabic (Tunisia)'
}, {
  value: 'ar-YE',
  title: 'Arabic (Yemen)'
}, {
  value: 'az',
  title: 'Azeri'
}, {
  value: 'az-Cyrl-AZ',
  title: 'Azeri (Cyrillic, Azerbaijan)'
}, {
  value: 'az-Latn-AZ',
  title: 'Azeri (Latin, Azerbaijan)'
}, {
  value: 'be',
  title: 'Belarusian'
}, {
  value: 'be-BY',
  title: 'Belarusian (Belarus)'
}, {
  value: 'bg',
  title: 'Bulgarian'
}, {
  value: 'bg-BG',
  title: 'Bulgarian (Bulgaria)'
}, {
  value: 'bs-Latn-BA',
  title: 'Bosnian (Bosnia and Herzegovina)'
}, {
  value: 'ca',
  title: 'Catalan'
}, {
  value: 'ca-ES',
  title: 'Catalan (Catalan)'
}, {
  value: 'cs',
  title: 'Czech'
}, {
  value: 'cs-CZ',
  title: 'Czech (Czech Republic)'
}, {
  value: 'cy-GB',
  title: 'Welsh (United Kingdom)'
}, {
  value: 'da',
  title: 'Danish'
}, {
  value: 'da-DK',
  title: 'Danish (Denmark)'
}, {
  value: 'de',
  title: 'German'
}, {
  value: 'de-AT',
  title: 'German (Austria)'
}, {
  value: 'de-DE',
  title: 'German (Germany)'
}, {
  value: 'de-CH',
  title: 'German (Switzerland)'
}, {
  value: 'de-LI',
  title: 'German (Liechtenstein)'
}, {
  value: 'de-LU',
  title: 'German (Luxembourg)'
}, {
  value: 'dv',
  title: 'Divehi'
}, {
  value: 'dv-MV',
  title: 'Divehi (Maldives)'
}, {
  value: 'el',
  title: 'Greek'
}, {
  value: 'el-GR',
  title: 'Greek (Greece)'
}, {
  value: 'en',
  title: 'English'
}, {
  value: 'en-029',
  title: 'English (Caribbean)'
}, {
  value: 'en-AU',
  title: 'English (Australia)'
}, {
  value: 'en-BZ',
  title: 'English (Belize)'
}, {
  value: 'en-CA',
  title: 'English (Canada)'
}, {
  value: 'en-GB',
  title: 'English (United Kingdom)'
}, {
  value: 'en-IE',
  title: 'English (Ireland)'
}, {
  value: 'en-JM',
  title: 'English (Jamaica)'
}, {
  value: 'en-NZ',
  title: 'English (New Zealand)'
}, {
  value: 'en-PH',
  title: 'English (Republic of the Philippines)'
}, {
  value: 'en-TT',
  title: 'English (Trinidad and Tobago)'
}, {
  value: 'en-US',
  title: 'English (United States)'
}, {
  value: 'en-ZA',
  title: 'English (South Africa)'
}, {
  value: 'en-ZW',
  title: 'English (Zimbabwe)'
}, {
  value: 'es',
  title: 'Spanish'
}, {
  value: 'es-AR',
  title: 'Spanish (Argentina)'
}, {
  value: 'es-BO',
  title: 'Spanish (Bolivia)'
}, {
  value: 'es-CL',
  title: 'Spanish (Chile)'
}, {
  value: 'es-CO',
  title: 'Spanish (Colombia)'
}, {
  value: 'es-CR',
  title: 'Spanish (Costa Rica)'
}, {
  value: 'es-DO',
  title: 'Spanish (Dominican Republic)'
}, {
  value: 'es-EC',
  title: 'Spanish (Ecuador)'
}, {
  value: 'es-ES',
  title: 'Spanish (Spain)'
}, {
  value: 'es-GT',
  title: 'Spanish (Guatemala)'
}, {
  value: 'es-HN',
  title: 'Spanish (Honduras)'
}, {
  value: 'es-MX',
  title: 'Spanish (Mexico)'
}, {
  value: 'es-NI',
  title: 'Spanish (Nicaragua)'
}, {
  value: 'es-PA',
  title: 'Spanish (Panama)'
}, {
  value: 'es-PE',
  title: 'Spanish (Peru)'
}, {
  value: 'es-PR',
  title: 'Spanish (Puerto Rico)'
}, {
  value: 'es-PY',
  title: 'Spanish (Paraguay)'
}, {
  value: 'es-SV',
  title: 'Spanish (El Salvador)'
}, {
  value: 'es-UY',
  title: 'Spanish (Uruguay)'
}, {
  value: 'es-VE',
  title: 'Spanish (Venezuela)'
}, {
  value: 'et',
  title: 'Estonian'
}, {
  value: 'et-EE',
  title: 'Estonian (Estonia)'
}, {
  value: 'eu',
  title: 'Basque'
}, {
  value: 'eu-ES',
  title: 'Basque (Basque)'
}, {
  value: 'fa',
  title: 'Persian'
}, {
  value: 'fa-IR',
  title: 'Persian (Iran)'
}, {
  value: 'fi',
  title: 'Finnish'
}, {
  value: 'fi-FI',
  title: 'Finnish (Finland)'
}, {
  value: 'fo',
  title: 'Faroese'
}, {
  value: 'fo-FO',
  title: 'Faroese (Faroe Islands)'
}, {
  value: 'fr',
  title: 'French'
}, {
  value: 'fr-BE',
  title: 'French (Belgium)'
}, {
  value: 'fr-CA',
  title: 'French (Canada)'
}, {
  value: 'fr-FR',
  title: 'French (France)'
}, {
  value: 'fr-CH',
  title: 'French (Switzerland)'
}, {
  value: 'fr-LU',
  title: 'French (Luxembourg)'
}, {
  value: 'fr-MC',
  title: 'French (Principality of Monaco)'
}, {
  value: 'gl',
  title: 'Galician'
}, {
  value: 'gl-ES',
  title: 'Galician (Galician)'
}, {
  value: 'gu',
  title: 'Gujarati'
}, {
  value: 'gu-IN',
  title: 'Gujarati (India)'
}, {
  value: 'he',
  title: 'Hebrew'
}, {
  value: 'he-IL',
  title: 'Hebrew (Israel)'
}, {
  value: 'hi',
  title: 'Hindi'
}, {
  value: 'hi-IN',
  title: 'Hindi (India)'
}, {
  value: 'hr',
  title: 'Croatian'
}, {
  value: 'hr-BA',
  title: 'Croatian (Bosnia and Herzegovina)'
}, {
  value: 'hr-HR',
  title: 'Croatian (Croatia)'
}, {
  value: 'hu',
  title: 'Hungarian'
}, {
  value: 'hu-HU',
  title: 'Hungarian (Hungary)'
}, {
  value: 'hy',
  title: 'Armenian'
}, {
  value: 'hy-AM',
  title: 'Armenian (Armenia)'
}, {
  value: 'id',
  title: 'Indonesian'
}, {
  value: 'id-ID',
  title: 'Indonesian (Indonesia)'
}, {
  value: 'is',
  title: 'Icelandic'
}, {
  value: 'is-IS',
  title: 'Icelandic (Iceland)'
}, {
  value: 'it',
  title: 'Italian'
}, {
  value: 'it-CH',
  title: 'Italian (Switzerland)'
}, {
  value: 'it-IT',
  title: 'Italian (Italy)'
}, {
  value: 'ja',
  title: 'Japanese'
}, {
  value: 'ja-JP',
  title: 'Japanese (Japan)'
}, {
  value: 'ka',
  title: 'Georgian'
}, {
  value: 'ka-GE',
  title: 'Georgian (Georgia)'
}, {
  value: 'kk',
  title: 'Kazakh'
}, {
  value: 'kk-KZ',
  title: 'Kazakh (Kazakhstan)'
}, {
  value: 'kn',
  title: 'Kannada'
}, {
  value: 'kn-IN',
  title: 'Kannada (India)'
}, {
  value: 'ko',
  title: 'Korean'
}, {
  value: 'kok',
  title: 'Konkani'
}, {
  value: 'kok-IN',
  title: 'Konkani (India)'
}, {
  value: 'ko-KR',
  title: 'Korean (Korea)'
}, {
  value: 'ky',
  title: 'Kyrgyz'
}, {
  value: 'ky-KG',
  title: 'Kyrgyz (Kyrgyzstan)'
}, {
  value: 'lt',
  title: 'Lithuanian'
}, {
  value: 'lt-LT',
  title: 'Lithuanian (Lithuania)'
}, {
  value: 'lv',
  title: 'Latvian'
}, {
  value: 'lv-LV',
  title: 'Latvian (Latvia)'
}, {
  value: 'mi-NZ',
  title: 'Maori (New Zealand)'
}, {
  value: 'mk',
  title: 'Macedonian'
}, {
  value: 'mk-MK',
  title: 'Macedonian (Former Yugoslav Republic of Macedonia)'
}, {
  value: 'mn',
  title: 'Mongolian'
}, {
  value: 'mn-MN',
  title: 'Mongolian (Cyrillic, Mongolia)'
}, {
  value: 'mr',
  title: 'Marathi'
}, {
  value: 'mr-IN',
  title: 'Marathi (India)'
}, {
  value: 'ms',
  title: 'Malay'
}, {
  value: 'ms-BN',
  title: 'Malay (Brunei Darussalam)'
}, {
  value: 'ms-MY',
  title: 'Malay (Malaysia)'
}, {
  value: 'mt-MT',
  title: 'Maltese (Malta)'
}, {
  value: 'nb-NO',
  title: 'Norwegian, Bokmal (Norway)'
}, {
  value: 'nl',
  title: 'Dutch'
}, {
  value: 'nl-BE',
  title: 'Dutch (Belgium)'
}, {
  value: 'nl-NL',
  title: 'Dutch (Netherlands)'
}, {
  value: 'nn-NO',
  title: 'Norwegian, Nynorsk (Norway)'
}, {
  value: 'no',
  title: 'Norwegian'
}, {
  value: 'ns-ZA',
  title: 'Northern Sotho (South Africa)'
}, {
  value: 'pa',
  title: 'Punjabi'
}, {
  value: 'pa-IN',
  title: 'Punjabi (India)'
}, {
  value: 'pl',
  title: 'Polish'
}, {
  value: 'pl-PL',
  title: 'Polish (Poland)'
}, {
  value: 'pt',
  title: 'Portuguese'
}, {
  value: 'pt-BR',
  title: 'Portuguese (Brazil)'
}, {
  value: 'pt-PT',
  title: 'Portuguese (Portugal)'
}, {
  value: 'quz-BO',
  title: 'Quechua (Bolivia)'
}, {
  value: 'quz-EC',
  title: 'Quechua (Ecuador)'
}, {
  value: 'quz-PE',
  title: 'Quechua (Peru)'
}, {
  value: 'ro',
  title: 'Romanian'
}, {
  value: 'ro-RO',
  title: 'Romanian (Romania)'
}, {
  value: 'ru',
  title: 'Russian'
}, {
  value: 'ru-RU',
  title: 'Russian (Russia)'
}, {
  value: 'sa',
  title: 'Sanskrit'
}, {
  value: 'sa-IN',
  title: 'Sanskrit (India)'
}, {
  value: 'se-FI',
  title: 'Sami (Northern) (Finland)'
}, {
  value: 'se-NO',
  title: 'Sami (Northern) (Norway)'
}, {
  value: 'se-SE',
  title: 'Sami (Northern) (Sweden)'
}, {
  value: 'sk',
  title: 'Slovak'
}, {
  value: 'sk-SK',
  title: 'Slovak (Slovakia)'
}, {
  value: 'sl',
  title: 'Slovenian'
}, {
  value: 'sl-SI',
  title: 'Slovenian (Slovenia)'
}, {
  value: 'sma-NO',
  title: 'Sami (Southern) (Norway)'
}, {
  value: 'sma-SE',
  title: 'Sami (Southern) (Sweden)'
}, {
  value: 'smj-NO',
  title: 'Sami (Lule) (Norway)'
}, {
  value: 'smj-SE',
  title: 'Sami (Lule) (Sweden)'
}, {
  value: 'smn-FI',
  title: 'Sami (Inari) (Finland)'
}, {
  value: 'sms-FI',
  title: 'Sami (Skolt) (Finland)'
}, {
  value: 'sq',
  title: 'Albanian'
}, {
  value: 'sq-AL',
  title: 'Albanian (Albania)'
}, {
  value: 'sr',
  title: 'Serbian'
}, {
  value: 'sr-Cyrl-BA',
  title: 'Serbian (Cyrillic) (Bosnia and Herzegovina)'
}, {
  value: 'sr-Cyrl-CS',
  title: 'Serbian (Cyrillic, Serbia)'
}, {
  value: 'sr-Latn-BA',
  title: 'Serbian (Latin) (Bosnia and Herzegovina)'
}, {
  value: 'sr-Latn-CS',
  title: 'Serbian (Latin, Serbia)'
}, {
  value: 'sv',
  title: 'Swedish'
}, {
  value: 'sv-FI',
  title: 'Swedish (Finland)'
}, {
  value: 'sv-SE',
  title: 'Swedish (Sweden)'
}, {
  value: 'sw',
  title: 'Kiswahili'
}, {
  value: 'sw-KE',
  title: 'Kiswahili (Kenya)'
}, {
  value: 'syr',
  title: 'Syriac'
}, {
  value: 'syr-SY',
  title: 'Syriac (Syria)'
}, {
  value: 'ta',
  title: 'Tamil'
}, {
  value: 'ta-IN',
  title: 'Tamil (India)'
}, {
  value: 'te',
  title: 'Telugu'
}, {
  value: 'te-IN',
  title: 'Telugu (India)'
}, {
  value: 'th',
  title: 'Thai'
}, {
  value: 'th-TH',
  title: 'Thai (Thailand)'
}, {
  value: 'tn-ZA',
  title: 'Tswana (South Africa)'
}, {
  value: 'tr',
  title: 'Turkish'
}, {
  value: 'tr-TR',
  title: 'Turkish (Turkey)'
}, {
  value: 'tt',
  title: 'Tatar'
}, {
  value: 'tt-RU',
  title: 'Tatar (Russia)'
}, {
  value: 'uk',
  title: 'Ukrainian'
}, {
  value: 'uk-UA',
  title: 'Ukrainian (Ukraine)'
}, {
  value: 'ur',
  title: 'Urdu'
}, {
  value: 'ur-PK',
  title: 'Urdu (Islamic Republic of Pakistan)'
}, {
  value: 'uz',
  title: 'Uzbek'
}, {
  value: 'uz-Cyrl-UZ',
  title: 'Uzbek (Cyrillic, Uzbekistan)'
}, {
  value: 'uz-Latn-UZ',
  title: 'Uzbek (Latin, Uzbekistan)'
}, {
  value: 'vi',
  title: 'Vietnamese'
}, {
  value: 'vi-VN',
  title: 'Vietnamese (Vietnam)'
}, {
  value: 'xh-ZA',
  title: 'Xhosa (South Africa)'
}, {
  value: 'zh-CN',
  title: 'Chinese (People\'s Republic of China)'
}, {
  value: 'zh-HK',
  title: 'Chinese (Hong Kong S.A.R.)'
}, {
  value: 'zh-CHS',
  title: 'Chinese (Simplified)'
}, {
  value: 'zh-CHT',
  title: 'Chinese (Traditional)'
}, {
  value: 'zh-MO',
  title: 'Chinese (Macao S.A.R.)'
}, {
  value: 'zh-SG',
  title: 'Chinese (Singapore)'
}, {
  value: 'zh-TW',
  title: 'Chinese (Taiwan)'
}, {
  value: 'zu-ZA',
  title: 'Zulu (South Africa)'
}];

var I18nPrefix = 'i18n';

var I18nDelimiter = '__i18n_';

var ReferenceBehavior;

(function (ReferenceBehavior) {
  ReferenceBehavior["HARD"] = "hard";
  ReferenceBehavior["WEAK"] = "weak";
  ReferenceBehavior["DISABLED"] = "disabled";
})(ReferenceBehavior || (ReferenceBehavior = {}));

var IdStructure;

(function (IdStructure) {
  IdStructure["SUBPATH"] = "subpath";
  IdStructure["DELIMITER"] = "delimiter";
})(IdStructure || (IdStructure = {}));

function getConfig(type) {
  var _schema$fieldNames, _cfg$fieldNames, _schema$fieldNames2, _cfg$fieldNames2, _schema$messages, _cfg$messages, _schema$messages2, _cfg$messages2, _schema$messages3, _cfg$messages3, _schema$messages4, _cfg$messages4, _schema$messages5, _cfg$messages5, _schema$messages6, _cfg$messages6, _schema$messages7, _cfg$messages7, _schema$messages8, _cfg$messages8, _schema$messages9, _schema$messages9$del, _cfg$messages9, _cfg$messages9$delete, _schema$messages10, _schema$messages10$de, _cfg$messages10, _cfg$messages10$delet, _schema$messages11, _schema$messages11$du, _cfg$messages11, _cfg$messages11$dupli, _schema$messages12, _schema$messages12$du, _cfg$messages12, _cfg$messages12$dupli, _schema$messages13, _schema$messages13$tr, _cfg$messages13, _cfg$messages13$trans, _cfg$messages14, _cfg$messages14$trans, _cfg$messages15, _cfg$messages15$trans, _cfg$messages16, _cfg$messages16$trans, _cfg$messages17, _cfg$messages17$trans, _cfg$messages18, _cfg$messages18$trans, _cfg$messages19, _cfg$messages19$trans, _cfg$messages20, _cfg$messages20$trans, _cfg$messages21, _cfg$messages21$trans;

  var schema = function () {
    var _getSchema;

    var schema = type ? typeof type === 'string' ? (_getSchema = getSchema(type)) === null || _getSchema === void 0 ? void 0 : _getSchema.i18n : type.i18n : false;
    if (typeof schema !== 'boolean') return schema;
    return {};
  }();

  var cfg = config__default["default"];
  return {
    base: (schema === null || schema === void 0 ? void 0 : schema.base) || (cfg === null || cfg === void 0 ? void 0 : cfg.base) || '',
    idStructure: cfg.idStructure || IdStructure.SUBPATH,
    referenceBehavior: cfg.referenceBehavior || ReferenceBehavior.HARD,
    withTranslationsMaintenance: (cfg === null || cfg === void 0 ? void 0 : cfg.withTranslationsMaintenance) === false ? false : true,
    fieldNames: {
      lang: (schema === null || schema === void 0 ? void 0 : (_schema$fieldNames = schema.fieldNames) === null || _schema$fieldNames === void 0 ? void 0 : _schema$fieldNames.lang) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$fieldNames = cfg.fieldNames) === null || _cfg$fieldNames === void 0 ? void 0 : _cfg$fieldNames.lang) || '__i18n_lang',
      references: (schema === null || schema === void 0 ? void 0 : (_schema$fieldNames2 = schema.fieldNames) === null || _schema$fieldNames2 === void 0 ? void 0 : _schema$fieldNames2.references) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$fieldNames2 = cfg.fieldNames) === null || _cfg$fieldNames2 === void 0 ? void 0 : _cfg$fieldNames2.references) || '__i18n_refs'
    },
    languages: (schema === null || schema === void 0 ? void 0 : schema.languages) || (cfg === null || cfg === void 0 ? void 0 : cfg.languages) || [],
    messages: {
      publishing: (schema === null || schema === void 0 ? void 0 : (_schema$messages = schema.messages) === null || _schema$messages === void 0 ? void 0 : _schema$messages.publishing) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages = cfg.messages) === null || _cfg$messages === void 0 ? void 0 : _cfg$messages.publishing) || 'Publishing...',
      publish: (schema === null || schema === void 0 ? void 0 : (_schema$messages2 = schema.messages) === null || _schema$messages2 === void 0 ? void 0 : _schema$messages2.publish) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages2 = cfg.messages) === null || _cfg$messages2 === void 0 ? void 0 : _cfg$messages2.publish) || 'Publish',
      updatingIntlFields: (schema === null || schema === void 0 ? void 0 : (_schema$messages3 = schema.messages) === null || _schema$messages3 === void 0 ? void 0 : _schema$messages3.updatingIntlFields) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages3 = cfg.messages) === null || _cfg$messages3 === void 0 ? void 0 : _cfg$messages3.updatingIntlFields) || 'Updating i18n fields...',
      intlFieldsUpdated: (schema === null || schema === void 0 ? void 0 : (_schema$messages4 = schema.messages) === null || _schema$messages4 === void 0 ? void 0 : _schema$messages4.intlFieldsUpdated) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages4 = cfg.messages) === null || _cfg$messages4 === void 0 ? void 0 : _cfg$messages4.intlFieldsUpdated) || 'I18n fields updated',
      loading: (schema === null || schema === void 0 ? void 0 : (_schema$messages5 = schema.messages) === null || _schema$messages5 === void 0 ? void 0 : _schema$messages5.loading) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages5 = cfg.messages) === null || _cfg$messages5 === void 0 ? void 0 : _cfg$messages5.loading) || 'Loading languages...',
      draft: (schema === null || schema === void 0 ? void 0 : (_schema$messages6 = schema.messages) === null || _schema$messages6 === void 0 ? void 0 : _schema$messages6.draft) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages6 = cfg.messages) === null || _cfg$messages6 === void 0 ? void 0 : _cfg$messages6.draft) || 'Draft',
      missingTranslations: (schema === null || schema === void 0 ? void 0 : (_schema$messages7 = schema.messages) === null || _schema$messages7 === void 0 ? void 0 : _schema$messages7.missingTranslations) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages7 = cfg.messages) === null || _cfg$messages7 === void 0 ? void 0 : _cfg$messages7.missingTranslations) || 'Following languages are missing some translations compared to the base language',
      missing: (schema === null || schema === void 0 ? void 0 : (_schema$messages8 = schema.messages) === null || _schema$messages8 === void 0 ? void 0 : _schema$messages8.missing) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages8 = cfg.messages) === null || _cfg$messages8 === void 0 ? void 0 : _cfg$messages8.missing) || 'Missing',
      deleteAll: {
        buttonTitle: (schema === null || schema === void 0 ? void 0 : (_schema$messages9 = schema.messages) === null || _schema$messages9 === void 0 ? void 0 : (_schema$messages9$del = _schema$messages9.deleteAll) === null || _schema$messages9$del === void 0 ? void 0 : _schema$messages9$del.buttonTitle) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages9 = cfg.messages) === null || _cfg$messages9 === void 0 ? void 0 : (_cfg$messages9$delete = _cfg$messages9.deleteAll) === null || _cfg$messages9$delete === void 0 ? void 0 : _cfg$messages9$delete.buttonTitle) || 'Delete (incl. translations)',
        deleting: (schema === null || schema === void 0 ? void 0 : (_schema$messages10 = schema.messages) === null || _schema$messages10 === void 0 ? void 0 : (_schema$messages10$de = _schema$messages10.deleteAll) === null || _schema$messages10$de === void 0 ? void 0 : _schema$messages10$de.deleting) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages10 = cfg.messages) === null || _cfg$messages10 === void 0 ? void 0 : (_cfg$messages10$delet = _cfg$messages10.deleteAll) === null || _cfg$messages10$delet === void 0 ? void 0 : _cfg$messages10$delet.deleting) || 'Deleting...'
      },
      duplicateAll: {
        buttonTitle: (schema === null || schema === void 0 ? void 0 : (_schema$messages11 = schema.messages) === null || _schema$messages11 === void 0 ? void 0 : (_schema$messages11$du = _schema$messages11.duplicateAll) === null || _schema$messages11$du === void 0 ? void 0 : _schema$messages11$du.buttonTitle) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages11 = cfg.messages) === null || _cfg$messages11 === void 0 ? void 0 : (_cfg$messages11$dupli = _cfg$messages11.duplicateAll) === null || _cfg$messages11$dupli === void 0 ? void 0 : _cfg$messages11$dupli.buttonTitle) || 'Duplicate (incl. translations)',
        duplicating: (schema === null || schema === void 0 ? void 0 : (_schema$messages12 = schema.messages) === null || _schema$messages12 === void 0 ? void 0 : (_schema$messages12$du = _schema$messages12.duplicateAll) === null || _schema$messages12$du === void 0 ? void 0 : _schema$messages12$du.duplicating) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages12 = cfg.messages) === null || _cfg$messages12 === void 0 ? void 0 : (_cfg$messages12$dupli = _cfg$messages12.duplicateAll) === null || _cfg$messages12$dupli === void 0 ? void 0 : _cfg$messages12$dupli.duplicating) || 'Duplicating...'
      },
      translationsMaintenance: {
        title: (schema === null || schema === void 0 ? void 0 : (_schema$messages13 = schema.messages) === null || _schema$messages13 === void 0 ? void 0 : (_schema$messages13$tr = _schema$messages13.translationsMaintenance) === null || _schema$messages13$tr === void 0 ? void 0 : _schema$messages13$tr.title) || (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages13 = cfg.messages) === null || _cfg$messages13 === void 0 ? void 0 : (_cfg$messages13$trans = _cfg$messages13.translationsMaintenance) === null || _cfg$messages13$trans === void 0 ? void 0 : _cfg$messages13$trans.title) || 'Translation Maintenance',
        selectSchemaPlaceholder: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages14 = cfg.messages) === null || _cfg$messages14 === void 0 ? void 0 : (_cfg$messages14$trans = _cfg$messages14.translationsMaintenance) === null || _cfg$messages14$trans === void 0 ? void 0 : _cfg$messages14$trans.selectSchemaPlaceholder) || 'Select schema type',
        idStructureMismatch: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages15 = cfg.messages) === null || _cfg$messages15 === void 0 ? void 0 : (_cfg$messages15$trans = _cfg$messages15.translationsMaintenance) === null || _cfg$messages15$trans === void 0 ? void 0 : _cfg$messages15$trans.idStructureMismatch) || 'document(s) with mismatched ID structures',
        missingLanguageField: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages16 = cfg.messages) === null || _cfg$messages16 === void 0 ? void 0 : (_cfg$messages16$trans = _cfg$messages16.translationsMaintenance) === null || _cfg$messages16$trans === void 0 ? void 0 : _cfg$messages16$trans.missingLanguageField) || 'document(s) are missing the language field',
        missingDocumentRefs: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages17 = cfg.messages) === null || _cfg$messages17 === void 0 ? void 0 : (_cfg$messages17$trans = _cfg$messages17.translationsMaintenance) === null || _cfg$messages17$trans === void 0 ? void 0 : _cfg$messages17$trans.missingDocumentRefs) || 'document(s) have missing translation references',
        orphanDocuments: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages18 = cfg.messages) === null || _cfg$messages18 === void 0 ? void 0 : (_cfg$messages18$trans = _cfg$messages18.translationsMaintenance) === null || _cfg$messages18$trans === void 0 ? void 0 : _cfg$messages18$trans.orphanDocuments) || 'orphaned translation document(s)',
        referenceBehaviorMismatch: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages19 = cfg.messages) === null || _cfg$messages19 === void 0 ? void 0 : (_cfg$messages19$trans = _cfg$messages19.translationsMaintenance) === null || _cfg$messages19$trans === void 0 ? void 0 : _cfg$messages19$trans.referenceBehaviorMismatch) || 'document(s) with mismatched reference behaviors',
        baseLanguageMismatch: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages20 = cfg.messages) === null || _cfg$messages20 === void 0 ? void 0 : (_cfg$messages20$trans = _cfg$messages20.translationsMaintenance) === null || _cfg$messages20$trans === void 0 ? void 0 : _cfg$messages20$trans.baseLanguageMismatch) || 'base document(s) with mismatched language field',
        fix: (cfg === null || cfg === void 0 ? void 0 : (_cfg$messages21 = cfg.messages) === null || _cfg$messages21 === void 0 ? void 0 : (_cfg$messages21$trans = _cfg$messages21.translationsMaintenance) === null || _cfg$messages21$trans === void 0 ? void 0 : _cfg$messages21$trans.fix) || 'Fix'
      }
    }
  };
}

var buildDocId = function buildDocId(id, lang) {
  var config = getConfig();
  if (config.idStructure === IdStructure.DELIMITER) return "".concat(id).concat(I18nDelimiter).concat(lang || '*');
  return "".concat(I18nPrefix, ".").concat(id, ".").concat(lang || '*');
};

var normalizeLanguageList = function normalizeLanguageList(languages) {
  return languages.map(function (l) {
    if (typeof l === 'string') {
      var langCult = LanguageCultures.find(function (x) {
        return x.value === l;
      });
      if (langCult) return {
        title: langCult.title,
        name: l
      };
      return {
        title: l,
        name: l
      };
    }

    return l;
  });
};

var getBaseLanguage = function getBaseLanguage(langs, base) {
  if (base) return langs.find(function (l) {
    return l.name === base;
  }) || null;
  return langs.length > 0 ? langs[0] : null;
};

var getSanityClient = function getSanityClient() {
  return client__default["default"].withConfig({
    apiVersion: "2021-10-01"
  });
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var lodash_get = get;

var getLanguagesFromOption = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee2(langs, document) {
    var languages, possiblePromise;
    return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = normalizeLanguageList;
            _context2.next = 3;
            return _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee() {
              var r, value;
              return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!Array.isArray(langs)) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return", langs);

                    case 2:
                      _context.next = 4;
                      return getSanityClient().fetch(langs.query);

                    case 4:
                      r = _context.sent;
                      value = langs.value;

                      if (!(typeof value === 'string')) {
                        _context.next = 8;
                        break;
                      }

                      return _context.abrupt("return", r.map(function (l) {
                        return lodash_get(l, value);
                      }));

                    case 8:
                      return _context.abrupt("return", r.map(function (l) {
                        return {
                          name: lodash_get(l, value.name),
                          title: lodash_get(l, value.title)
                        };
                      }));

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }))();

          case 3:
            _context2.t1 = _context2.sent;
            languages = (0, _context2.t0)(_context2.t1);

            if (!languagesLoaderFn__default["default"]) {
              _context2.next = 12;
              break;
            }

            possiblePromise = languagesLoaderFn__default["default"](languages, document);

            if (!(possiblePromise instanceof Promise)) {
              _context2.next = 11;
              break;
            }

            _context2.next = 10;
            return possiblePromise;

          case 10:
            return _context2.abrupt("return", _context2.sent);

          case 11:
            return _context2.abrupt("return", possiblePromise);

          case 12:
            return _context2.abrupt("return", languages);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getLanguagesFromOption(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getLanguageFromId = function getLanguageFromId(id) {
  // subpath
  var rx = new RegExp("".concat(I18nPrefix, "\\.[^.]+\\.([^.]+)"));
  var match = id.match(rx);
  if (match && match.length === 2) return match[1]; // delimiter

  var split = id.split(I18nDelimiter);
  if (split.length > 1) return split[1];
  return null;
};

var getBaseIdFromId = function getBaseIdFromId(id) {
  // subpath
  var rx = new RegExp("".concat(I18nPrefix, "\\.([^.]+)\\.[^.]+"));
  var match = id.match(rx);
  if (match && match.length === 2) return match[1]; // delimiter

  var split = id.split(I18nDelimiter);
  if (split.length > 0) return split[0];
  return id;
};

var getAllSchemas = function getAllSchemas() {
  return schemas__default["default"]._original.types;
};

var getTranslationsFor = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(baseDocumentId) {
    var config, client, segments, _documents, documents;

    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = getConfig();
            client = getSanityClient();

            if (!(config.idStructure === IdStructure.DELIMITER)) {
              _context.next = 9;
              break;
            }

            segments = baseDocumentId.split('-');
            segments[segments.length - 1] = "".concat(segments[segments.length - 1]).concat(I18nDelimiter, "*");
            _context.next = 7;
            return client.fetch('*[_id match $segments]', {
              segments: segments
            });

          case 7:
            _documents = _context.sent;
            return _context.abrupt("return", _documents ? _documents.filter(function (d) {
              return d._id.startsWith(baseDocumentId);
            }) : []);

          case 9:
            _context.next = 11;
            return client.fetch('*[_id in path($path)]', {
              path: buildDocId(baseDocumentId, '*')
            });

          case 11:
            documents = _context.sent;
            return _context.abrupt("return", documents !== null && documents !== void 0 ? documents : []);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getTranslationsFor(_x) {
    return _ref.apply(this, arguments);
  };
}();

function makeObjectKey(input) {
  return input.replace(/[^a-zA-Z0-9_]/g, '_');
}

function createSanityReference(id) {
  var weak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    _type: 'reference',
    _ref: id,
    _weak: weak
  };
}

function updateIntlFieldsForDocument(_x, _x2) {
  return _updateIntlFieldsForDocument.apply(this, arguments);
}

function _updateIntlFieldsForDocument() {
  _updateIntlFieldsForDocument = _asyncToGenerator__default["default"]( /*#__PURE__*/_regeneratorRuntime__default["default"].mark(function _callee(id, type) {
    var _getBaseLanguage;

    var schema, config, client, baseDocumentId, document, fieldName, refsFieldName, langs, languageId, currentDocumentTransaction, translatedDocuments, baseDocumentTransaction;
    return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            schema = getSchema(type);
            config = getConfig(schema);
            client = getSanityClient();
            baseDocumentId = getBaseIdFromId(id);
            _context.next = 6;
            return client.getDocument(id);

          case 6:
            document = _context.sent;
            fieldName = config.fieldNames.lang;
            refsFieldName = config.fieldNames.references;
            _context.next = 11;
            return getLanguagesFromOption(config.languages, document);

          case 11:
            langs = _context.sent;
            languageId = getLanguageFromId(id) || ((_getBaseLanguage = getBaseLanguage(langs, config.base)) === null || _getBaseLanguage === void 0 ? void 0 : _getBaseLanguage.name); // Update I18n field for current document

            currentDocumentTransaction = client.transaction();
            currentDocumentTransaction.createIfNotExists({
              _id: id,
              _type: type
            });
            currentDocumentTransaction.patch(id, {
              set: _defineProperty__default["default"]({}, fieldName, languageId)
            });
            _context.next = 18;
            return currentDocumentTransaction.commit();

          case 18:
            _context.next = 20;
            return getTranslationsFor(baseDocumentId);

          case 20:
            translatedDocuments = _context.sent;

            if (!(translatedDocuments.length > 0)) {
              _context.next = 27;
              break;
            }

            baseDocumentTransaction = client.transaction();
            baseDocumentTransaction.createIfNotExists({
              _id: baseDocumentId,
              _type: type
            });
            baseDocumentTransaction.patch(baseDocumentId, {
              set: _defineProperty__default["default"]({}, refsFieldName, config.referenceBehavior !== ReferenceBehavior.DISABLED ? translatedDocuments.map(function (doc) {
                var lang = getLanguageFromId(doc._id);
                return {
                  _key: doc._id,
                  lang: lang,
                  ref: createSanityReference(doc._id, config.referenceBehavior === ReferenceBehavior.WEAK)
                };
              }, {}) : [])
            });
            _context.next = 27;
            return baseDocumentTransaction.commit();

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _updateIntlFieldsForDocument.apply(this, arguments);
}

exports.buildDocId = buildDocId;
exports.createSanityReference = createSanityReference;
exports.getAllSchemas = getAllSchemas;
exports.getBaseIdFromId = getBaseIdFromId;
exports.getBaseLanguage = getBaseLanguage;
exports.getConfig = getConfig;
exports.getLanguageFromId = getLanguageFromId;
exports.getLanguagesFromOption = getLanguagesFromOption;
exports.getSanityClient = getSanityClient;
exports.getSchema = getSchema;
exports.getTranslationsFor = getTranslationsFor;
exports.makeObjectKey = makeObjectKey;
exports.normalizeLanguageList = normalizeLanguageList;
exports.updateIntlFieldsForDocument = updateIntlFieldsForDocument;
//# sourceMappingURL=index.js.map
