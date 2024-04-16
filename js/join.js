// 우편주소
function openZipSearch() {
	new daum.Postcode({
			oncomplete: function(data) {
					// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

					// 각 주소의 노출 규칙에 따라 주소를 조합한다.
					// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
					let addr = ''; // 주소 변수
					let extraAddr = ''; // 참고항목 변수

					//사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
					if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
							addr = data.roadAddress;
					} else { // 사용자가 지번 주소를 선택했을 경우(J)
							addr = data.jibunAddress;
					}

					// 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
					if(data.userSelectedType === 'R'){
							// 법정동명이 있을 경우 추가한다. (법정리는 제외)
							// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
							if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
									extraAddr += data.bname;
							}
							// 건물명이 있고, 공동주택일 경우 추가한다.
							if(data.buildingName !== '' && data.apartment === 'Y'){
									extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
							}
							// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
							if(extraAddr !== ''){
									extraAddr = ' (' + extraAddr + ')';
							}
							// 조합된 참고항목을 해당 필드에 넣는다.
							document.getElementById("join_address3").value = extraAddr;
					
					} else {
							document.getElementById("join_address3").value = '';
					}

					// 우편번호와 주소 정보를 해당 필드에 넣는다.
					document.getElementById('join_address0').value = data.zonecode;
					document.getElementById("join_address1").value = addr;
					// 커서를 상세주소 필드로 이동한다.
					document.getElementById("join_address2").focus();
			}
	}).open();
}

// 개인정보 동의 모두 동의
let checkAll = document.getElementById('join_agr6');
let checkList = document.querySelectorAll('.join_agr_all');
let check1 = document.getElementById('join_agr1');
let check2 = document.getElementById('join_agr2');
let check3 = document.getElementById('join_agr3');
let check4 = document.getElementById('join_agr4');
let check5 = document.getElementById('join_agr5');

document.addEventListener('DOMContentLoaded', function () {
	checkAll.addEventListener('change', function () {
		check1.checked = checkAll.checked;
		check2.checked = checkAll.checked;
		check3.checked = checkAll.checked;
		check4.checked = checkAll.checked;
		check5.checked = checkAll.checked;
	});

	checkList.forEach(function (check) {
		check.addEventListener('change', function () {
			if (check1.checked && check2.checked && check3.checked && check4.checked && check5.checked) {
				checkAll.checked = true;
			} else {
				checkAll.checked = false;
			}
		});
	});
});