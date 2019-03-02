$("#elem-jchart").jChart({
  data: [
    {
      value: 100,
      color: {
        normal: '#747474'
      }
    },
    {
      value: 200,
      color: {
          normal: '#e75735'
      }
    },
    {
      value: 150,
      color: {
          normal: '#e5e5e5'
      }
    },
    {
      value: 100,
      color: {
          normal: '#4eb7a8'
      }
    }
  ],
  appearance: {
      type: 'donut',
      baseColor: 'transparent',
      gap: 0,
      baseStrokeWidth: 3
  }
});