import {
  initialize,
  requestPermission,
  readRecords,
} from "react-native-health-connect";

export const readSampleData = async () => {
  await initialize();

  const grantedPermissions = await requestPermission([
    { accessType: "read", recordType: "ActiveCaloriesBurned" },
    { accessType: "read", recordType: "Steps" },
  ]);

  // check if granted
  console.log(grantedPermissions);

  const result = await readRecords("ActiveCaloriesBurned", {
    timeRangeFilter: {
      operator: "between",
      startTime: "2023-01-09T12:00:00.405Z",
      endTime: "2023-01-09T23:53:15.405Z",
    },
  });

  return result;
};
