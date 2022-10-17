(function () {
  
  // Hamburger Menu
  let hamMenuOpen = document.getElementById('three-lines');
  let hamMenuClose = document.getElementById('close-btn');
  let hamModal = document.getElementById('my-hamburger-modal');

  showDropdown = (e) => {
    hamMenuOpen.style.display = 'none';
    hamMenuClose.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
    hamModal.style.display = 'inline';
  };

  hideDropdown = (e) => {
    hamMenuOpen.style.display = 'flex';
    hamMenuClose.style.display = 'none';
    document.querySelector('body').style.overflow = 'visible';
    hamModal.style.display = 'none';
  };

  hamMenuOpen.onclick = () => showDropdown();
  hamMenuClose.onclick = () => hideDropdown();
})();


(function () {
  // Variables
  const dropdowns = document.getElementsByClassName('dropdown-title');
  const options = document.getElementsByClassName('option-card');
  const grindEmBtn = document.getElementById('grindEmBtn');
  const usingElem = document.getElementById('using');
  const groundAlaElem = document.getElementById('groundAla');
  const grindElem = document.getElementById('grind');
  const modalUsingElem = document.getElementById('modal-using');
  const modalGroundAlaElem = document.getElementById('modal-groundAla');
  const modalGrindElem = document.getElementById('modal-grind');
  const optionsGrind = document.getElementById('options-grind');
  const liGrind = document.getElementById('li-grind');
  const modal = document.getElementById('my-modal');
  const createPlanBtn = document.getElementById('create-plan-btn');
  const checkoutBtn = document.getElementById('checkout-btn');
  const mobileCheckoutBtn = document.getElementById('mobile-checkout-btn');
  const modalCost = document.getElementById('modal-cost');
  const mobileModalCost = document.getElementById('mobile-modal-cost');

  // Dropdown Click
  let dropdownsCount = dropdowns.length;
  for (let i = 0; i < dropdownsCount; i++) {
    // Add onclick to each dropdown
    let dropdownSelection = dropdowns[i];
    dropdownSelection.onclick = (e) => {
      // Declare category to open/close dropdown
      let category =
        e.target.type === 'submit' ? e.target.value : e.target.parentNode.value;

      // Toggle options and side bar highlight
      document.getElementById('options-' + category).classList.toggle('hide');
      document.getElementById('li-' + category).classList.toggle('open');
      document.getElementById('arrow-' + category).classList.toggle('spin');
    };
  }

  // Option Click
  let optionsCount = options.length;
  for (let j = 0; j < optionsCount; j++) {
    let selection = options[j];
    // Add onlick to each selection card
    selection.onclick = (e) => {
      if (selection.value === 'capsule') {
        // Call handle active class function
        handleActive(selection, options, 1, 2);

        // Disable want us to grind them question
        grindEmBtn.disabled = true;
        grindEmBtn.style = 'cursor: not-allowed;';
        optionsGrind.classList.add('hide');
        liGrind.classList.remove('open');

        // Remove type if already clicked
        options[9].classList.remove('active');
        options[10].classList.remove('active');
        options[11].classList.remove('active');

        // Update summary
        usingElem.innerHTML = 'using';
        groundAlaElem.innerHTML = '';
        grindElem.innerHTML = '';

        // Update Modal
        modalUsingElem.innerHTML = 'using';
        modalGroundAlaElem.innerHTML = '';
        modalGrindElem.innerHTML = '';

        // Call update text function
        changeText('pref', selection.value + 's');
        changeText('modal-pref', selection.value + 's');
      } else if (selection.value === 'filter') {
        // Call handle active class function
        handleActive(selection, options, 0, 2);

        // Enable want us to grind them question
        grindEmBtn.disabled = false;
        grindEmBtn.style = 'cursor: pointer;';

        // Update summary
        usingElem.innerHTML = 'as ';
        groundAlaElem.innerHTML = 'ground ala ';
        if (grindElem.innerHTML === '') {
          grindElem.innerHTML = '____';
        }

        // Update modal
        modalUsingElem.innerHTML = 'as ';
        modalGroundAlaElem.innerHTML = 'ground ala ';
        if (modalGrindElem.innerHTML === '') {
          modalGrindElem.innerHTML = '____';
        }

        // Call update text function
        changeText('pref', selection.value);
        changeText('modal-pref', selection.value);
      } else if (selection.value === 'espresso') {
        // Call handle active class function
        handleActive(selection, options, 0, 1);

        // Enable want us to grind them question
        grindEmBtn.disabled = false;
        grindEmBtn.style = 'cursor: pointer;';

        // Update summary
        usingElem.innerHTML = 'as ';
        groundAlaElem.innerHTML = 'ground ala ';
        if (grindElem.innerHTML === '') {
          grindElem.innerHTML = '____';
        }

        // Update modal
        modalUsingElem.innerHTML = 'as ';
        modalGroundAlaElem.innerHTML = 'ground ala ';
        if (modalGrindElem.innerHTML === '') {
          modalGrindElem.innerHTML = '____';
        }

        // Call update text function
        changeText('pref', selection.value);
        changeText('modal-pref', selection.value);
      } else if (selection.value === 'single') {
        handleActive(selection, options, 4, 5);
        changeText('type', selection.value);
        changeText('modal-type', selection.value);
      } else if (selection.value === 'decaf') {
        handleActive(selection, options, 3, 5);
        changeText('type', selection.value);
        changeText('modal-type', selection.value);
      } else if (selection.value === 'blended') {
        handleActive(selection, options, 3, 4);
        changeText('type', selection.value);
        changeText('modal-type', selection.value);
      } else if (selection.value === '250') {
        handleActive(selection, options, 7, 8);
        changeText('quant', selection.value + 'g');
        changeText('modal-quant', selection.value + 'g');
      } else if (selection.value === '500') {
        handleActive(selection, options, 6, 8);
        changeText('quant', selection.value + 'g');
        changeText('modal-quant', selection.value + 'g');
      } else if (selection.value === '1000') {
        handleActive(selection, options, 6, 7);
        changeText('quant', selection.value + 'g');
        changeText('modal-quant', selection.value + 'g');
      } else if (selection.value === 'wholebean') {
        handleActive(selection, options, 10, 11);
        changeText('grind', selection.value);
        changeText('modal-grind', selection.value);
      } else if (selection.value === 'filtered') {
        handleActive(selection, options, 9, 11);
        changeText('grind', selection.value.slice(0, 6));
        changeText('modal-grind', selection.value.slice(0, 6));
      } else if (selection.value === 'cafetiere') {
        handleActive(selection, options, 9, 10);
        changeText('grind', selection.value);
        changeText('modal-grind', selection.value);
      } else if (selection.value === 'weekly') {
        handleActive(selection, options, 13, 14);
        changeText('freq', 'Every Week');
        changeText('modal-freq', 'Every Week');
      } else if (selection.value === 'biweekly') {
        handleActive(selection, options, 12, 14);
        changeText('freq', 'Every 2 Weeks');
        changeText('modal-freq', 'Every 2 Weeks');
      } else if (selection.value === 'monthly') {
        handleActive(selection, options, 12, 13);
        changeText('freq', 'Every Month');
        changeText('modal-freq', 'Every Month');
      } else {
        console.log('NOOOOPE!');
      }
    };
  }

  // Modal Open/Close
  const createPlanBtnClick = () => {
    // Declaring Variables
    const quantity = document.getElementById('quant').innerHTML;
    const frequency = document.getElementById('freq').innerHTML;
    let cost = 0;

    // Set cost based on user choices
    switch (quantity) {
      case '250g':
        switch (frequency) {
          case 'Every Week':
            cost = 7.2 * 4;
            break;
          case 'Every 2 Weeks':
            cost = 9.6 * 2;
            break;
          default:
            cost = 12;
        }
        break;
      case '500g':
        switch (frequency) {
          case 'Every Week':
            cost = 13 * 4;
            break;
          case 'Every 2 Weeks':
            cost = 17.5 * 2;
            break;
          default:
            cost = 22;
        }
        break;
      case '1000g':
        switch (frequency) {
          case 'Every Week':
            cost = 22 * 4;
            break;
          case 'Every 2 Weeks':
            cost = 32 * 2;
            break;
          default:
            cost = 42;
        }
    }

    // Set modal message, show modal
    modalCost.innerHTML = '$' + cost.toFixed(2) + '/mo';
    mobileModalCost.innerHTML = 'Checkout - $' + cost.toFixed(2) + '/mo';
    modal.style.display = 'block';
  };

  // Close modal
  const checkoutBtnClick = () => {
    modal.style.display = 'none';
  };

  // Close Modal
  const mobileCheckoutBtnClick = () => {
    modal.style.display = 'none';
  };

  // Close Modal
  const closeModal = (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  };

  // Make selection cyan, others grey
  const handleActive = (element, elementArr, num1, num2) => {
    element.classList.add('active');
    elementArr[num1].classList.remove('active');
    elementArr[num2].classList.remove('active');
  };

  // Update summary
  const changeText = (element, newText) => {
    // Declaring Variables
    const prefText = document.getElementById('pref').innerHTML;
    const typeText = document.getElementById('type').innerHTML;
    const quantText = document.getElementById('quant').innerHTML;
    const grindText = document.getElementById('grind').innerHTML;
    const freqText = document.getElementById('freq').innerHTML;
    let answers = prefText + typeText + quantText + grindText + freqText;
    let capNewText = newText[0].toUpperCase() + newText.slice(1);

    // Capitalize and set words in summary
    document.getElementById(element).innerHTML = capNewText;

    // Enable/disable create plan button
    if (!answers.includes('_')) {
      createPlanBtn.disabled = false;
      createPlanBtn.style = 'cursor: pointer;';
      createPlanBtn.classList.remove('disabled');
    } else {
      createPlanBtn.disabled = true;
      createPlanBtn.style = 'cursor: not-allowed;';
      createPlanBtn.classList.add('disabled');
    }
  };

  // Event handlers
  createPlanBtn.onclick = () => createPlanBtnClick();
  checkoutBtn.onclick = () => checkoutBtnClick();
  mobileCheckoutBtn.onclick = () => mobileCheckoutBtnClick();
  window.onclick = (e) => closeModal(e);
})();

// Flight API 

const tableBody = document.getElementById('table-body');

const getFlight = () => {
  fetch('http://localhost:3000/')
  .then((response) => response.json())
  .then(flights =>{
    populateTable(flights)

  })
  .catch(err => console.log(err));
}

getFlight();

const populateTable =(flights) =>{

  for(const flight of flights){

  const tableRow = document.createElement('tr')
  const tableIcon = document.createElement('td')
  tableIcon.textContent = "+"
  tableRow.append(tableIcon)
    
  const flightDetails ={
    time:flight.departing.slice(0,5),
    destination:flight.destination.toUpperCase(),
    flight:flight.flightNumber.shift(),
    gate:flight.gate,
    remarks:flight.status.toUpperCase()
  }

  for(const flightDetail in flightDetails){
    const tableCell = document.createElement('td')
    const word = Array.from(flightDetails[flightDetail])


    for (const[index, letter] of word.entries()){

     const letterElement = document.createElement('div')

     setTimeout(()=>{
      letterElement.classList.add('flip')
      letterElement.textContent = letter
      tableCell.append(letterElement)
     }, 100 * index)  
  }

  tableRow.append(tableCell)

  }
  tableBody.append(tableRow)
}
}
