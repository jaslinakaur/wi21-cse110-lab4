for (const property in statistics) {
    if(property.substr(0, 1) == 'r') {
        console.log(`${statistics[property]}`);
    }
    else if (statistics[property]%2 != 0){
        console.log(`${statistics[property]}`);
    }
  }