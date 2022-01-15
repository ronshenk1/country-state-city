"use strict";
exports.__esModule = true;
var country_json_1 = require("../assets/country.json");
var utils_1 = require("../utils");
// Get a country by isoCode.
function getCountryByCode(isoCode) {
    if (!isoCode)
        return undefined;
    return (0, utils_1.findEntryByCode)(country_json_1["default"], isoCode);
}
// Get a list of all countries.
function getAllCountries() {
    return country_json_1["default"];
}
exports["default"] = {
    getCountryByCode: getCountryByCode,
    getAllCountries: getAllCountries
};
