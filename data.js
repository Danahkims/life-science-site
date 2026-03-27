const problemSets = {
  twoPoint: [
    {
      id: 1,
      number: "01",
      type: "2점",
      image: "assets/images/2point/2point.01.png",
      answer: 4,
      summary: "ㄴ, ㄷ",
      explanation: [
        "ㄱ: ㄹ은 호흡계가 아니라 배설계이다.",
        "ㄴ: 혈관은 ㄷ에 속하는 기관이다. 순환계에는 심장과 혈관이 있다.",
        "ㄷ: ㄱ에는 글리코젠의 합성이 일어나는 기관인 간이 있다."
      ]
    },
    {
      id: 2,
      number: "02",
      type: "2점",
      image: "assets/images/2point/2point.02.png",
      answer: 3,
      summary: "ㄱ, ㄴ",
      explanation: [
        "A는 폐, B는 심장, C는 간, D는 콩팥이다.",
        "ㄱ: A에서 흡수된 물질 중 일부인 산소가 B를 거쳐 세포 호흡에 사용된다.",
        "ㄴ: C인 간에서 암모니아가 요소로 전환된다.",
        "ㄷ: C는 소화계, D는 배설계에 속하므로 서로 다른 기관계이다."
      ]
    },
    {
      id: 3,
      number: "03",
      type: "2점",
      image: "assets/images/2point/2point.03.png",
      answer: 2,
      summary: "ㄷ",
      explanation: [
        "A는 단백질, B는 지방이다.",
        "ㄱ은 암모니아, ㄴ은 요소, ㄷ은 물이다.",
        "ㄱ: A는 지방이 아니라 단백질이다.",
        "ㄴ: 폐에서 요소는 배출되지 않고 물은 배출된다.",
        "ㄷ: 지방의 구성 원소와 암모니아의 구성 원소에는 모두 수소가 포함된다."
      ]
    },
    {
      id: 4,
      number: "04",
      type: "2점",
      image: "assets/images/2point/2point.04.png",
      answer: 4,
      summary: "ㄴ, ㄷ",
      explanation: [
        "ㄱ은 O2, ㄴ은 CO2이다.",
        "ㄱ: ㄱ은 CO2가 아니라 O2이다.",
        "ㄴ: 적혈구를 통해 산소가 운반된다.",
        "ㄷ: 이산화탄소는 조직 세포의 세포 호흡으로 생성된다."
      ]
    },
    {
      id: 5,
      number: "05",
      type: "2점",
      image: "assets/images/2point/2point.05.png",
      answer: 3,
      summary: "ㄱ, ㄴ",
      explanation: [
        "ㄱ은 재흡수 과정이다.",
        "ㄱ: 재흡수에는 물이 포함될 수 있다.",
        "ㄴ: 오줌에는 질소 노폐물이 포함된다.",
        "ㄷ: 요소는 콩팥에서 걸러져 오줌으로 배설되므로 d2에서의 농도가 d1보다 높다."
      ]
    },
    {
      id: 6,
      number: "06",
      type: "2점",
      image: "assets/images/2point/2point.06.png",
      answer: 4,
      summary: "ㄴ, ㄷ",
      explanation: [
        "요소 용액은 중성, 생콩즙과 끓인 콩즙은 산성이다.",
        "ㄱ: 생콩즙은 염기성이 아니라 산성이다.",
        "ㄴ: II에서 요소가 분해되어 암모니아가 생성되었고, 암모니아는 염기성이다.",
        "ㄷ: III에서 반응이 일어나지 않은 것은 열에 의해 효소가 변성되었기 때문이며, 효소의 구성 성분에는 단백질이 포함된다."
      ]
    },
    {
      id: 7,
      number: "07",
      type: "2점",
      image: "assets/images/2point/2point.07.png",
      answer: 1,
      summary: "ㄴ",
      explanation: [
        "A는 호흡계, B는 소화계, C는 순환계, D는 배설계이다.",
        "ㄱ: A는 순환계가 아니라 호흡계이다.",
        "ㄴ: 이동 과정에는 질소 노폐물의 이동이 포함된다.",
        "ㄷ: A와 B를 연결하는 역할은 D가 아니라 순환계인 C가 한다."
      ]
    },
    {
      id: 8,
      number: "08",
      type: "2점",
      image: "assets/images/2point/2point.08.png",
      answer: 5,
      summary: "ㄱ, ㄴ, ㄷ",
      explanation: [
        "ㄱ은 대사 증후군, ㄴ은 대사성 질환이다.",
        "ㄱ: ㄱ은 대사 증후군이 맞다.",
        "ㄴ: 오줌에 포도당이 섞여 나오는 것은 당뇨병의 증상이다.",
        "ㄷ: 고혈압은 심혈관 질환의 원인이 될 수 있다."
      ]
    },
    {
      id: 9,
      number: "09",
      type: "2점",
      image: "assets/images/2point/2point.09.png",
      answer: 2,
      summary: "ㄴ",
      explanation: [
        "ㄱ: 체질량 지수 26.0은 과체중이 아니라 비만 1단계에 해당한다.",
        "ㄴ: 몸무게 50kg, 키 1.5m이면 BMI는 약 22.2로 정상 체중이다.",
        "ㄷ: 비만 3단계인 사람은 정상 체중인 사람보다 대사성 질환을 나타낼 가능성이 높다."
      ]
    },
    {
      id: 10,
      number: "10",
      type: "2점",
      image: "assets/images/2point/2point.10.png",
      answer: 4,
      summary: "ㄴ, ㄷ",
      explanation: [
        "ㄱ: (가)는 에너지 부족 상태이다.",
        "ㄴ: 에너지 부족 상태가 지속되면 저장된 영양소를 분해하여 에너지를 얻는다.",
        "ㄷ: (나)는 에너지 과잉 상태이므로 지속되면 비만이 될 수 있다."
      ]
    },
    {
      id: 11,
      number: "11",
      type: "2점",
      image: "assets/images/2point/2point.11.png",
      answer: 2,
      summary: "ㄴ",
      explanation: [
        "A는 체중이 증가했고, B는 체중이 감소했다.",
        "ㄱ: t 동안 A의 체중은 증가하였다.",
        "ㄴ: t 동안 B에서도 세포 호흡은 일어난다.",
        "ㄷ: 많은 양의 먹이를 섭취한 동물은 B가 아니라 A이다."
      ]
    },
    {
      id: 12,
      number: "12",
      type: "2점",
      image: "assets/images/2point/2point.12.png",
      answer: 3,
      summary: "A, C",
      explanation: [
        "학생 A: 잠자고 있을 때에도 생명 활동 유지를 위해 에너지 소비가 일어난다.",
        "학생 B: 기초 대사량은 활동 대사량에 포함되지 않는다.",
        "학생 C: 성별과 활동 강도는 모두 1일 대사량에 영향을 미친다."
      ]
    }
  ],

  threePoint: [
    {
      id: 1,
      number: "01",
      type: "3점",
      image: "assets/images/3point/3point.01.png",
      answer: 3,
      summary: "ㄱ, ㄷ",
      explanation: [
        "ㄱ: 폐를 통과하기 전 혈액은 통과 후 혈액보다 단위 부피당 산소의 양이 적다.",
        "ㄴ: 간에서 포도당이 글리코젠으로 전환되므로 구간 I 동안 혈당량은 ㄹ의 혈액이 ㄷ보다 높다.",
        "ㄷ: 간에서 암모니아가 요소로 전환되고, 요소는 콩팥으로 가므로 단위 부피당 요소의 양은 ㄷ의 혈액이 ㅁ보다 많다."
      ]
    },
    {
      id: 2,
      number: "02",
      type: "3점",
      image: "assets/images/3point/3point.02.png",
      answer: 3,
      summary: "ㄱ, ㄴ",
      explanation: [
        "ㄱ은 포도당, ㄴ은 지방산이다.",
        "A는 모세 혈관, B는 암죽관이다.",
        "ㄱ: ㄱ은 포도당이다.",
        "ㄴ: 지방은 지방산과 모노글리세리드로 분해된다.",
        "ㄷ: A는 암죽관이 아니라 모세 혈관이다."
      ]
    },
    {
      id: 3,
      number: "03",
      type: "3점",
      image: "assets/images/3point/3point.03.png",
      answer: 1,
      summary: "ㄴ",
      explanation: [
        "물질 ㄱ은 암모니아이다.",
        "ㄱ: 아미노산이 아니라 암모니아가 ㄱ이다.",
        "ㄴ: 중성인 오줌의 pH가 산성인 콩즙보다 높다.",
        "ㄷ: III의 용액에서 t1에서 t2로 갈수록 pH가 증가하므로 수소 이온 농도는 감소한다."
      ]
    },
    {
      id: 4,
      number: "04",
      type: "3점",
      image: "assets/images/3point/3point.04.png",
      answer: 5,
      summary: "ㄱ, ㄴ, ㄷ",
      explanation: [
        "인슐린을 주사했는데도 혈당량이 증가했으므로 A는 제2형 당뇨병, B는 제1형 당뇨병이다.",
        "ㄱ: A는 제2형 당뇨병 환자이다.",
        "ㄴ: 대사성 질환에는 당뇨병이 포함된다.",
        "ㄷ: 구간 I 동안 B의 간에서 글리코젠 합성이 일어났다."
      ]
    },
    {
      id: 5,
      number: "05",
      type: "3점",
      image: "assets/images/3point/3point.05.png",
      answer: 3,
      summary: "ㄱ, ㄴ",
      explanation: [
        "ㄱ: (가)에서는 심장에서 나온 혈액이 아가미와 온몸의 모세 혈관을 모두 지난 뒤 다시 심장으로 돌아온다.",
        "ㄴ: 심장과 혈관은 모두 순환계에 속한다.",
        "ㄷ: 모세 혈관을 거치면 혈압이 낮아지므로 d2의 혈압이 d1보다 낮다."
      ]
    },
    {
      id: 6,
      number: "06",
      type: "3점",
      image: "assets/images/3point/3point.06.png",
      answer: 4,
      summary: "ㄱ, ㄷ",
      explanation: [
        "ㄱ: 콜레스테롤은 지질에 속한다.",
        "ㄴ: 50대~70대에서는 고콜레스테롤혈증 환자 비율이 여자에서 더 높다.",
        "ㄷ: 연령대가 높아질수록 고콜레스테롤혈증이 증가하므로 관련 증상이 나타날 확률이 높다."
      ]
    },
    {
      id: 7,
      number: "07",
      type: "3점",
      image: "assets/images/3point/3point.07.png",
      answer: 2,
      summary: "ㄷ",
      explanation: [
        "기체 ㄱ은 O2, 기체 ㄴ은 CO2이다.",
        "ㄱ: ㄱ은 O2이다.",
        "ㄴ: 단위 부피당 O2의 양은 혈액 B가 혈액 A보다 적다.",
        "ㄷ: CO2는 순환계를 통해 조직 세포에서 호흡계로 이동한다."
      ]
    },
    {
      id: 8,
      number: "08",
      type: "3점",
      image: "assets/images/3point/3point.08.png",
      answer: 2,
      summary: "ㄴ",
      explanation: [
        "A의 섭취량은 2000, B는 2700, C는 3000이다.",
        "ㄱ: 1일 대사량은 하루 동안 필요한 총에너지양이며, 기초 대사량은 생명 유지를 위한 최소 에너지양이다.",
        "ㄴ: B는 에너지 섭취량과 소비량이 균형을 이룬다.",
        "ㄷ: 현재 상태가 지속되면 C는 체중이 증가하고 A는 체중이 감소한다."
      ]
    }
  ]
};
