import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const STATUS_CONFIG = {
  default: { icon: "help-circle-outline", color: "#64748b" },
  pending: { icon: "time-outline", color: "#f59e0b" },
  confirmed: { icon: "checkmark-circle-outline", color: "#22c55e" },
  cancelled: { icon: "close-circle-outline", color: "#ef4444" },
};

const BookingCards = ({
  title = "",
  subtitle = "",
  status = "",
  date = "",
  onPress,
}) => {
  const CardWrapper = onPress ? TouchableOpacity : View;

  const displayTitle = String(title);
  const displayDate = String(date);
  const displayStatus = String(status).toLowerCase();

  const currentStatus = STATUS_CONFIG[displayStatus] || STATUS_CONFIG.default;

  return (
    <CardWrapper
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 14,
        marginVertical: 8,
        backgroundColor: "#f0f0f0",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
      }}
      onPress={onPress}
    >
      {/* LEFT ICON */}
      <View
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          backgroundColor: "#22c55e",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 14,
        }}
      >
        <Ionicons name="calendar" size={26} color="#fff" />
      </View>

      {/* CENTER CONTENT */}
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#0f172a",
            marginBottom: 2,
          }}
        >
          {displayTitle}
        </Text>

        {subtitle ? (
          <Text
            style={{
              fontSize: 14,
              color: "#475569",
              marginBottom: 4,
            }}
          >
            {String(subtitle)}
          </Text>
        ) : null}

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            name="calendar-outline"
            size={14}
            color="#64748b"
            style={{ marginRight: 6 }}
          />
          <Text style={{ fontSize: 13, color: "#64748b" }}>
            {displayDate}
          </Text>
        </View>
      </View>

      {/* RIGHT STATUS ICON */}
      <View style={{ alignItems: "flex-end" }}>
        <Ionicons
          name={currentStatus.icon}
          size={24}
          color={currentStatus.color}
        />
      </View>
    </CardWrapper>
  );
};

export default BookingCards;
