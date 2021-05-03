// [삽입정렬]응용삽입구현
/**
 * 배열 내에 주어진 값을 정확히 삽입할 수 있도록 'insert' 함수를 수정하세요.
 * insert함수는 array, rightIndex, value 총 세 가지의 매개변수를 가집니다.
 * 'insert' 함수를 호출하기 전에:
 * 배열[0]에서 배열[rightIndex]까지의 요소가 오름차순으로 정렬됩니다.
 *
 * 'insert' 함수를 호출한 후:
 * value와 이전에 배열[0]에서 배열[rightIndex]까지 있었던 요소들은 오름차순으로 정렬하고
 * 배열[0] 에서 배열[rightIndex+1]의 요소에 저장해야 합니다.
 *
 * 이를 위해서는 'insert' 함수는 오른쪽의 'value'보다 큰 항목들을 움직여
 * 'value'에 자리를 내주어야 합니다. 이는 'rightindex'에서 시작해야 하며
 * 'value'보다 작거나 동일한 항목을 찾을 때 또는 배열의 첫 부분에 이를 때 멈추어야 합니다.
 *
 * 함수에 'value'의 자리가 생기면 'value' 값을 배열 내에 쓸 수 있습니다.
 * 이 함수를 쓰는 방법은 다양하지만 힌트 코드와 일관되는 방식으로 써야 합니다.
 */

var insert = function (array, rightIndex, value) {
  var key;
  for (key = rightIndex; key >= 0 && array[key] > value; key--) {
    array[key + 1] = array[key];
  }
  array[key + 1] = value;
};

var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
println("Array after inserting 2:  " + array);
Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

insert(array, 5, 9);
println("Array after inserting 9:  " + array);
Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);

insert(array, 6, 6);
println("Array after inserting 6:  " + array);
Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);
