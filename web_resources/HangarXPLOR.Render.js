
var HangarXPLOR = HangarXPLOR || {};

HangarXPLOR._pageNo = 1;
HangarXPLOR._pageCount = 10;
HangarXPLOR._totalRecords = 10;

// Render items that match the search, filter and sort criteria
HangarXPLOR.Render = function()
{
  var filterBy = 'js-custom-filter';
  var sortBy = 'js-custom-sort';
  var searchBy = 'js-custom-search';
  
  console.log('Rendering', filterBy, sortBy, searchBy, HangarXPLOR._pageNo, HangarXPLOR._pageCount);
  
  filterBy = '.' + filterBy;
  sortBy = '.' + sortBy;
  searchBy = '.' + searchBy;
  
  var buffer = HangarXPLOR._inventory;
  
  $(filterBy).each(function() { buffer = HangarXPLOR.Filter(buffer, $(this).val()); });
  $(sortBy).each(function() { buffer = HangarXPLOR.Sort(buffer, $(this).val()); });
  $(searchBy).each(function() { buffer = HangarXPLOR.Search(buffer, $(this).val()); });
  
  if (buffer.length == 0)
    buffer.push($('<h4 class="empy-list">Your hangar is empty.</h4>'));
  
  HangarXPLOR._totalRecords = buffer.length;
  
  buffer = buffer.slice((HangarXPLOR._pageNo - 1) * HangarXPLOR._pageCount, HangarXPLOR._pageNo * HangarXPLOR._pageCount);
    
  HangarXPLOR.$list.empty();
  HangarXPLOR.$list.append(buffer);
}