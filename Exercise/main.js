var dDay = new Date()
var nHours = dDay.getHours()
if ((nHours <8 ) && (nHours >=5)) {document.write("<h1>jó reggelt</h1>")}
if ((nHours >=8) && (nHours <19)) {document.write("jó napot!")}
if ((nHours >=19) && (nHours <24)) {document.write("jó estét!")}
if ((nHours >=0) && (nHours <5)) {document.write("jó éjszakát!")}