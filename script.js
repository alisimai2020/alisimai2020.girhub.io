


function addEntry() {
    var entryField = document.getElementById("entryField");
    var entry = entryField.value.trim();

    // Use regular expression to validate the entry format
    var regex = /^[a-zA-Z0-9]+,[a-zA-Z0-9]+,[0-9]+$/;
    var match = regex.exec(entry);

    if (match) {
      var directoryId = match[1];
      var description = match[2];
      var duration = match[3];

      var entryList = document.getElementById("entryList");
      var li = document.createElement("li");
      li.textContent = entry;
      entryList.appendChild(li);

      entryField.value = "";
    } else {
      alert("Invalid entry");
    }
  }

  function summary() {
    var entryList = document.getElementById("entryList");
    var entries = entryList.getElementsByTagName("li");

    var summaryList = document.getElementById("summaryList");
    summaryList.innerHTML = "";

    var summaryCount = document.createElement("li");
    summaryCount.textContent = "Number of entries: " + entries.length;
    summaryList.appendChild(summaryCount);

    var sortedEntries = Array.from(entries).sort(function(a, b) {
      var durationA = parseInt(a.textContent.split(" ")[2]);
      var durationB = parseInt(b.textContent.split(" ")[2]);
      return durationB - durationA;
    });

    sortedEntries.forEach(function(entry) {
      var li = document.createElement("li");
      li.textContent = entry.textContent.replace(/,/g, "");
      summaryList.appendChild(li);
    });
  }
