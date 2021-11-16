module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  if_even: function(i){
    if((i % 2) == 0){
      return true
    } else {
      return false
    }
  },
  if_odd: function(i){
    if((i % 2) == 1){
      return true
    } else {
      return false
    }
  }
};
