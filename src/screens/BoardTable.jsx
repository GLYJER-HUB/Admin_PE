import { useState } from "react";
import Box from "@mui/material/Box";
import UserCard from "../components/UserCard";
import ProjectCard from "../components/ProjectCard";
import { Typography } from "@mui/material";
import { colors } from "../utilities/colors";
import { useEffect } from "react";
import { fetchStatistics } from "../services/boardService";
import ChangePasswordModal from "../components/ChangePasswordModal";

const BoardTable = () => {
  const [statistics, setStatistics] = useState({
    users: 0,
    projects: 0,
  });

  useEffect(() => {
    const fetchStatisticsData = async () => {
      const response = await fetchStatistics();
      const responseData = await response.json();
      setStatistics(responseData.statistics);
    };
    fetchStatisticsData();
  }, []);

  return (
    <>
      <Box>
        <Typography
          variant="h4"
          sx={{ color: colors.third, fontWeight: "bold" }}>
          Tableau de Bord
        </Typography>
        <Box sx={{ display: "flex", pt: 3 }}>
          <Box sx={{ m: 5, mt: 0, ml: 0 }}>
            <UserCard userCount={statistics.users} />
          </Box>
          <Box sx={{ m: 5, mt: 0 }}>
            <ProjectCard projectCount={statistics.projects} />
          </Box>
          <Box>
            <ChangePasswordModal />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BoardTable;
