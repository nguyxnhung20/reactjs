import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "demo chart simple",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Sell",
      data: [200, 3000, 400, 500, 600, 2000, 100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Buy",
      data: [100, 2000, 300, 400, 700, 2500, 50],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const HomePage = () => {
  return <Bar options={options} data={data} />;
};

export default HomePage;
