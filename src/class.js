"use strict";
///クラス///
class Pokemon {
  constructor(type, batugun1, batugun2, imahitotu1, imahitotu2, imahitotu3) {
    this.type = type;
    this.batugun1 = batugun1;
    this.batugun2 = batugun2;
    this.imahitotu1 = imahitotu1;
    this.imahitotu2 = imahitotu2;
    this.imahitotu3 = imahitotu3;
  }
  koukabatugun() {
    document.getElementById(
      "type"
    ).textContent = `相手が\n【${this.type}】の場合`;
    document.getElementById(
      "batugun-1"
    ).textContent = `○(\n2.56倍\n )\n:\n ${this.batugun1}`;
    document.getElementById(
      "batugun-2"
    ).textContent = `○(\n1.60倍\n)\n:\n ${this.batugun2}`;
    document.getElementById(
      "imahitotu-1"
    ).textContent = `▲(0.625倍)\n :\n${this.imahitotu1}`;
    document.getElementById(
      "imahitotu-2"
    ).textContent = `▲(0.390倍) \n:\n${this.imahitotu2}`;
    document.getElementById(
      "imahitotu-3"
    ).textContent = `▲(0.244倍) \n:\n${this.imahitotu3}`;
  }
}
