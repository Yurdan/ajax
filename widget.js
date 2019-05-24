var xhr = new XMLHttpRequest();

    xhr.open('GET', 'employees.json');

    xhr.send();

    xhr.onreadystatechange = function () {

      var list = JSON.parse(xhr.responseText); // не могу получить сразу массив, почему?

      showList(list);

    }


    // create list container and add class
    const listWorkersPresence = document.createElement('ul');
    listWorkersPresence.classList.add('bulleted');

    function showList(list) {
      // sort out each object in array
      list.forEach(function (list) {

        const workerName = document.createElement('li');
        const presentOrNot = document.createElement('li');


        workerName.innerText = list.name;
        presentOrNot.innerText = list.inoffice;

        // add classes
        if (presentOrNot.innerText == 'false') {
          workerName.classList.add('out');
        } else {
          workerName.classList.add('in');
        }
        listWorkersPresence.appendChild(workerName);

        document.getElementById('employeeList').appendChild(listWorkersPresence);
      });

    }