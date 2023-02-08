
const inputNote1= document.getElementById('number1');
const inputNote2= document.getElementById('number2');
const inputNote3= document.getElementById('number3');
const average = document.getElementById('average');
const recoverMessage = document.getElementById('recover')
const winMessage = document.getElementById('win')
const honorsMessage = document.getElementById('honors')
const btnCalculate = document.getElementById('btnCalculate');
const finalMessage = document.getElementById('message');


inputNote1.addEventListener('keyup', validateNotes);
inputNote2.addEventListener('keyup', validateNotes);
inputNote3.addEventListener('keyup', validateNotes);
btnCalculate.addEventListener('click', promProcces);

function validateNotes() {
    const note1 = Number(inputNote1.value);
    const note2 = Number(inputNote2.value);
    const note3 = Number(inputNote3.value);
    if (note1>5 || note1<0){
        winMessage.textContent=("La nota 1 esta fuera de los rangos")
        cleanFields();
    }
    else if (note2>5 || note2<0){
        winMessage.textContent="La nota 2 esta fuera de los rangos"
        cleanFields();
    }
    else if (note3>5 || note3<0){
        winMessage.textContent=("La nota 3 esta fuera de los rangos")
        cleanFields();       
    }
    else if (inputNote1.value != "" && inputNote2.value != ""){
        giveInformation();
        validateFields(note1,note2,note3);
    }
    if (inputNote1.value == "" && inputNote2.value=="" && inputNote3.value=="") {
        cleanFields()
        winMessage.textContent= " ";
        average.innerHTML="";
        finalMessage.innerHTML="";
    }
    if (inputNote2.value=="" && inputNote3.value=="" || inputNote1.value=="" && inputNote3.value=="") {
        cleanFields()
        winMessage.textContent= " ";
        average.innerHTML="";
        finalMessage.innerHTML="";
    }

}

function validateFields() {
    if (inputNote1.value != "" && inputNote2.value!="" && inputNote3.value!="") {
        recoverMessage.textContent= " ";
        winMessage.textContent= " ";
        honorsMessage.textContent= " ";
    }
}

function cleanFields() {
    finalMessage.textContent=' ';
    recoverMessage.textContent=' ';
    honorsMessage.textContent=' ';
    average.textContent=' ';
}

function giveInformation() {
    const note1 = Number(inputNote1.value)*0.3;
    const note2 = Number(inputNote2.value)*0.3;
    let addTwoNotes = note1 + note2;
    let necessaryRecover = (2.1-addTwoNotes)/0.4;
    let necessaryWin = (3.5-addTwoNotes)/0.4;
    let necessaryHonors = (4.6-addTwoNotes)/0.4;
    
    if (necessaryRecover<=0) {
        recoverMessage.innerHTML="Estas en rango de recuperacion";
    }
    
    else{
        recoverMessage.innerHTML=`Para recuperar necesitas ${necessaryRecover.toFixed(2)}`;
    }
    if (necessaryWin<=0) {
        recoverMessage.innerHTML=" "
        winMessage.textContent="Usted ya gano la materia";
    }
    else{
        winMessage.textContent=`Para ganar necesitas ${necessaryWin.toFixed(2)}`;
    }
    if (necessaryHonors<=0) {
        honorsMessage.textContent="Usted ya gano la materia con honores"
    }
    else if(necessaryHonors>0){
        honorsMessage.textContent=`Para ganar con honores necesitas ${necessaryHonors.toFixed(2)}`;
    }

}

function promProcces(){
    
    const note1 = Number(inputNote1.value)*0.3;
    const note2 = Number(inputNote2.value)*0.3;
    const note3 = Number(inputNote3.value)*0.4;
    const finalNote = (note1 + note2 + note3)
        console.log(finalNote);
        average.textContent = `${finalNote.toFixed(2)}`;

            finalInfo(finalNote)
        
        
}
function finalInfo(finalNote) {
    let message = ""
    
    if (finalNote>=4.5 && finalNote <=5.0) {
        message= "Has ganado la asignatura con honores"
    }
    else if (finalNote>=3.5 && finalNote <4.5) {
        message= "Has ganado la asignatura"
    }
    else if (finalNote>=2.1 && finalNote <3.5){
        message= "Has perdido, pero aun puede recuperar"
    }
    else {
        message= "Has perdido la asignatura"
    }
    finalMessage.textContent = message;
}