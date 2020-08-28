function isIncludeMAOrCT(anOrder) {
  return [
    'MA',
    'CT',
  ].includes(anOrder.deliveryState);
}

function isIncludeNYOrNH(anOrder) {
  return [
    'NY',
    'NH',
  ].includes(anOrder.deliveryState);
}

function calculateDeliveryTimeIsRush(anOrder) {
  let deliveryTime;
  if (isIncludeMAOrCT(anOrder)) {
    deliveryTime = 1;
  } else if (isIncludeNYOrNH(anOrder)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }
  return deliveryTime;
}

function isIncludeMAOrCTOrNY(anOrder) {
  return [
    'MA',
    'CT',
    'NY',
  ].includes(anOrder.deliveryState);
}

function isIncludeMEOrNH(anOrder) {
  return [
    'ME',
    'NH',
  ].includes(anOrder.deliveryState);
}

function calculateDeliveryTimeNotRush(anOrder) {
  let deliveryTime;
  if (isIncludeMAOrCTOrNY(anOrder)) {
    deliveryTime = 2;
  } else if (isIncludeMEOrNH(anOrder)) {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }
  return deliveryTime;
}

function deliveryDate (anOrder, isRush) {
  if (isRush) {
    let deliveryTime = calculateDeliveryTimeIsRush(anOrder);
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime = calculateDeliveryTimeNotRush(anOrder);
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}

module.exports = {
  deliveryDate
};

