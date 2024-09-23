import AppleHealthKit, {
  HealthValue,
  HealthKitPermissions,
} from "react-native-health";

const permissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.HeartRate,
      AppleHealthKit.Constants.Permissions.Steps,
    ],
  },
} as HealthKitPermissions;

export async function readSampleData_apple() {
  AppleHealthKit.initHealthKit(permissions, (error: string) => {
    if (error) {
      console.log("[ERROR] Cannot grant permissions!");
    }

    const options = {
      startDate: new Date(2020, 1, 1).toISOString(),
    };

    const heartRate = AppleHealthKit.getHeartRateSamples(
      options,
      (callbackError: string, results: HealthValue[]) => {
        console.log(results);
        return results;
      }
    );

    const steps = AppleHealthKit.getDailyStepCountSamples(
      options,
      (error: string, result: HealthValue[]) => {
        console.log(result);
        return result;
      }
    );

    return { heartRate, steps };
  });
}
