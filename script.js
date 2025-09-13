function total(){
    let t = Number(document.getElementById("Tamil").value);
    let e = Number(document.getElementById("English").value);
    let m = Number(document.getElementById("Maths").value);
    let s = Number(document.getElementById("Science").value);
    let ss = Number(document.getElementById("SScience").value);

    let totalMarks = t + e + m + s + ss;
    document.getElementById("totalMarks").textContent = totalMarks;

    let avg = totalMarks / 5;
    document.getElementById("percentage").textContent = avg.toFixed(1)+"%";
}
// ...existing code...
function clearFields(){
    document.getElementById("Tamil").value = "";
    document.getElementById("English").value = "";
    document.getElementById("Maths").value = "";
    document.getElementById("Science").value = "";
    document.getElementById("SScience").value = "";
    document.getElementById("totalMarks").textContent = "0";
    document.getElementById("percentage").textContent = "0";
    document.getElementById("name").value = "";
}
/*function submit(){
    total();
    alert("Form submitted successfully!");


}
    */
function submit(){
    total();

    const data = {
        name: document.getElementById("name").value,
        Tamil: Number(document.getElementById("Tamil").value),
        English: Number(document.getElementById("English").value),
        Maths: Number(document.getElementById("Maths").value),
        Science: Number(document.getElementById("Science").value),
        SScience: Number(document.getElementById("SScience").value),
        totalMarks: Number(document.getElementById("totalMarks").textContent),
        percentage: document.getElementById("percentage").textContent
    };

    const jsonData = JSON.stringify(data, null, 2);

    // Trigger download of JSON file
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "marksheet.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
window.onload = function() {
    document.getElementById("name").focus();
};
window.onload = function() {
    const inputs = [
        "Tamil",
        "English",
        "Maths",
        "Science",
        "SScience"
    ].map(id => document.getElementById(id));

    inputs.forEach((input, idx) => {
        input.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                if (idx < inputs.length - 1) {
                    inputs[idx + 1].focus();
                }
            }
        });
    });
};