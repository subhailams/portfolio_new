/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable1 = document.querySelector(".citeT1");
const citeTable2 = document.querySelector(".citeT2");
const citeTable3 = document.querySelector(".citeT3");
const citeTable4 = document.querySelector(".citeT4");
const citeTable5 = document.querySelector(".citeT5");
const citeTable6 = document.querySelector(".citeT6");
const citeTable7 = document.querySelector(".citeT7");
const citeTable8 = document.querySelector(".citeT8");

const research = [
    {
        title : "Real-Time Suspicious Human Action Recognition from Surveillance Videos for Resource-Constrained Devices",
        authors : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu",
        conferences : "American Publications - JCTN Scopus Indexed",
        researchYr : 2020,
        citebox : "#popup1",
        image : "assets/images/research-page/inteferenceNetwork.png"
    },

    {
        title : "Real-Time Spontaneous abortion prediction and Health assessment of Pregnant women  using Machine Learning and IoT",
        authors : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre",
        conferences : "International Conference on Developments in Engineering Management Sciences and Technology-2019",
        researchYr : 2019,
        citebox : "#popup2",
        image : "assets/images/research-page/crossLingual.png"
    },

];

const cite1 = [{

}];

const cite2 = [{

}];

const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox}) =>
        (output +=`
            <tr> 
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="${image}" class="imgRes"></span></div>
            <a href="#0" class="paperTitle"> ${title} </a> 
            <div> ${authors} </div> <div class="rConferences"> ${conferences} 
            <div class="researchY">${researchYr}</div>
            </div>
        
            <!--CITE BUTTON-->
            <div class="d-flex justify-content-end" style="margin-right:5%;">
            
            <a href="#" class="button button-accent button-small text-right button-abstract">ABSTRACT</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="${citebox}" class="button button-accent button-small button-cite">CITE</a

            </div>
            </td>
            </tr>
            `)
        );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

const citeData1 = () => {
    let output = "";
    cite1.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable1.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData1);

const citeData2 = () => {
    let output = "";
    cite2.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable2.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData2);
