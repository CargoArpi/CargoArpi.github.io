var dDay = new Date()
var nHours = dDay.getHours()
if ((nHours <12 ) && (nHours >=5)) {document.write("jó reggelt!")}
if ((nHours >=12) && (nHours <19)) {document.write("jó napot!")}
if ((nHours >=19) && (nHours <24)) {document.write("jó estét!")}
if ((nHours >=0) && (nHours <5)) {document.write("jó éjszakát!")}