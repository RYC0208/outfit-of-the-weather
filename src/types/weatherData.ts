export interface weatherData {
  coord: {
    lon: number; // 위도
    lat: number; // 걍도
  };
  weather: [
    {
      id: number; // 날씨 상태 ID
      main: string; // 날씨 상태 요약 설명 (맑음, 흐림, 비 등)
      icon: string; // 날씨 상태 아이콘
    }
  ];
  main: {
    temp: number; // 온도
    temp_min: number; // 최저 기온
    temp_max: number; // 최고 기온
    feels_like: number; // 체감 온도
  };
  name: string; // 도시 이름
}
