/**
 * Get Input Fields
 */
var input__IDs = [
    'city__input',
    'city__select',
    'date',
    'gender',
    'other_gender',
    'name',
    'email',
    'phone',
];
var radio__IDs = [
    'delivery',
    'take_away',
];

/**
 * No tracking asked
 */
// if (navigator.doNotTrack) {
//     deleteCookie(city_selectID);
//     deleteCookie(dateID);
//     throw new Error("We don't track you!");
// }

// check if there was cookie
if (!getCookie(input__IDs[0])) {
    populateStorage();
} else {
    setForm();
}

/**
 * Set LocalStorage
 */
function populateStorage() {
    input__IDs.forEach(function (item, index, array) {
        if (document.getElementById(item).value !== null && document.getElementById(item).value !== undefined)
            setCookie(item, document.getElementById(item).value, 30);
    });
    radio__IDs.forEach(function (item, index, array) {
        if (document.getElementById(item))
            setCookie(item, document.getElementById(item).checked, 30);
    });
    setForm();
}

/**
 * Set Form
 */
function setForm() {
    input__IDs.forEach(function (item, index, array) {
        if (document.getElementById(item)) {
            document.getElementById(item).value = getCookie(item);
        }
    });
    radio__IDs.forEach(function (item, index, array) {
        if (document.getElementById(item))
            if (getCookie(item) === "true")
                document.getElementById(item).checked = true;
            else {
                document.getElementById(item).checked = false;
            }
    });
}

/**
 * Event Listener
 */
input__IDs.forEach(function (item, index, array) {
    if (document.getElementById(item)) {
        document.getElementById(item).onchange = populateStorage;
    }
});
radio__IDs.forEach(function (item, index, array) {
    if (document.getElementById(item)) {
        document.getElementById(item).onchange = populateStorage;
    }
});