/* 
day06/jQuery/task01.js
 */
globalThis.$temp;
function confirm() {
    /*     const input = document.querySelector("input").value;
        const trs = document.querySelectorAll("tbody tr");
        let check = false; */

    const $input = $("#input").val();
    const $trs = $("tbody tr");
    let check = false;


    if (globalThis.$temp) {
        globalThis.$temp.css('background', '#fff');
        globalThis.$temp.children().first().text($(temp).children().first().text().replace("★", ""));
    }

    $trs.each((i, tr) => {
        let $td = $(tr).children().first();
        if ($td.text() == $input) {
            check = true;
            globalThis.temp = $(tr);
            $(tr).css('background', '#ef5350');
            $td.text("★" + $td.text());
        }
    });

    if (!check) {
        alert("다시 시도해주세요.");
    }
}
/*     trs.forEach(tr => {
        let td = tr.firstElementChild;
        if (td.innerHTML == input) {
            check = true;
            globalThis.temp = tr;
            tr.style.background = "#ef5350";
            td.innerHTML = "★" + td.innerHTML;
        }
    });

    if (!check) {
        alert("다시 시도해주세요.");
    }
} */