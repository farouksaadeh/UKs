let zips;

fetch('./places.json')
    .then((res) => res.json())
    .then((data) => {
        zips = data;
    });

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('zipcode').addEventListener('blur', function() {
        const zipcode = this.value;
        const placeEntry = zips.find(entry => entry.zipcode === zipcode);

        if (placeEntry) {
            document.getElementById('place').value = placeEntry.place;
        } else {
            document.getElementById('place').value = '';
        }
    });
});
