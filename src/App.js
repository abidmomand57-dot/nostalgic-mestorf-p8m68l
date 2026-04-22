import { useState } from "react";

const workoutData = {
  Saturday: {
    muscle: "CHEST",
    icon: "💪",
    color: "#FF5C1A",
    tip: "Focus on the mind-muscle connection. Squeeze your chest at the top of every rep.",
    exercises: [
      {
        name: "Flat Barbell Bench Press",
        sets: 4,
        reps: "8–10",
        rest: "90s",
        note: "Primary mass builder. Keep feet flat, arch natural.",
      },
      {
        name: "Incline Dumbbell Press",
        sets: 3,
        reps: "10–12",
        rest: "75s",
        note: "Targets upper chest. Set bench to 30–45°.",
      },
      {
        name: "Decline Dumbbell Press",
        sets: 3,
        reps: "10–12",
        rest: "75s",
        note: "Lower chest emphasis. Control the eccentric.",
      },
      {
        name: "Dumbbell Chest Flyes",
        sets: 3,
        reps: "12–15",
        rest: "60s",
        note: "Slight bend in elbows. Feel the stretch at the bottom.",
      },
      {
        name: "Cable Crossover",
        sets: 3,
        reps: "12–15",
        rest: "60s",
        note: "Keep tension throughout. Cross hands at finish.",
      },
      {
        name: "Chest Dips",
        sets: 3,
        reps: "10–12",
        rest: "60s",
        note: "Lean slightly forward to engage chest over triceps.",
      },
      {
        name: "Push-up Burnout",
        sets: 3,
        reps: "To failure",
        rest: "45s",
        note: "Finish with a pump. Wide grip targets outer chest.",
      },
    ],
  },
  Sunday: {
    muscle: "BACK",
    icon: "🏋️",
    color: "#1AB8FF",
    tip: "Drive with your elbows, not your hands. Think of your hands as hooks.",
    exercises: [
      {
        name: "Conventional Deadlift",
        sets: 4,
        reps: "6–8",
        rest: "120s",
        note: "King of back exercises. Keep spine neutral, brace core.",
      },
      {
        name: "Pull-ups / Lat Pulldown",
        sets: 4,
        reps: "8–10",
        rest: "90s",
        note: "Use pull-ups if able, lat pulldown as alternative.",
      },
      {
        name: "Barbell Bent-over Row",
        sets: 3,
        reps: "10–12",
        rest: "75s",
        note: "Hinge at hips, pull to lower chest. Retract scapula.",
      },
      {
        name: "Seated Cable Row",
        sets: 3,
        reps: "10–12",
        rest: "75s",
        note: "Keep torso upright. Full stretch and full contraction.",
      },
      {
        name: "Single-arm Dumbbell Row",
        sets: 3,
        reps: "10–12 each",
        rest: "60s",
        note: "Support on bench. Row to your hip, not your shoulder.",
      },
      {
        name: "Face Pulls",
        sets: 3,
        reps: "15–20",
        rest: "45s",
        note: "Cable at eye level. External rotation at end range.",
      },
      {
        name: "Straight-arm Pulldown",
        sets: 3,
        reps: "12–15",
        rest: "45s",
        note: "Isolates lats. Arms straight, hinge from shoulder.",
      },
    ],
  },
  Monday: {
    muscle: "SHOULDERS",
    icon: "🎯",
    color: "#A855F7",
    tip: "Warm up your rotator cuff before heavy pressing to prevent injury.",
    exercises: [
      {
        name: "Overhead Barbell Press (OHP)",
        sets: 4,
        reps: "8–10",
        rest: "90s",
        note: "Brace core, squeeze glutes. Don't flare elbows too wide.",
      },
      {
        name: "Dumbbell Lateral Raise",
        sets: 4,
        reps: "12–15",
        rest: "60s",
        note: "Slight forward lean. Lead with your elbows, pinky up.",
      },
      {
        name: "Arnold Press",
        sets: 3,
        reps: "10–12",
        rest: "75s",
        note: "Rotate palms as you press. Great for full delt development.",
      },
      {
        name: "Dumbbell Front Raise",
        sets: 3,
        reps: "12",
        rest: "60s",
        note: "Alternate arms. Control the descent slowly.",
      },
      {
        name: "Rear Delt Dumbbell Flyes",
        sets: 3,
        reps: "12–15",
        rest: "60s",
        note: "Hinge forward at hips. Think elbows to ceiling.",
      },
      {
        name: "Upright Row (EZ Bar)",
        sets: 3,
        reps: "10–12",
        rest: "60s",
        note: "Pull to chin height. Wide grip reduces wrist strain.",
      },
      {
        name: "Dumbbell Shrugs",
        sets: 3,
        reps: "15–20",
        rest: "45s",
        note: "Hold at top for 1s. Don't roll shoulders — straight up/down.",
      },
    ],
  },
  Tuesday: {
    muscle: "BICEPS",
    icon: "💥",
    color: "#22C55E",
    tip: "Supinate your wrists fully at the top — it's what separates a curl from a full bicep contraction.",
    exercises: [
      {
        name: "Barbell Curl",
        sets: 4,
        reps: "10–12",
        rest: "75s",
        note: "Classic mass builder. Keep elbows fixed at sides.",
      },
      {
        name: "Incline Dumbbell Curl",
        sets: 3,
        reps: "10–12",
        rest: "75s",
        note: "Bench at ~60°. Long head stretch. Do not swing.",
      },
      {
        name: "Hammer Curl",
        sets: 3,
        reps: "10–12",
        rest: "60s",
        note: "Neutral grip. Targets brachialis for arm thickness.",
      },
      {
        name: "Preacher Curl (EZ Bar)",
        sets: 3,
        reps: "10–12",
        rest: "75s",
        note: "Lock upper arm on pad. Full range of motion.",
      },
      {
        name: "Concentration Curl",
        sets: 3,
        reps: "12 each",
        rest: "60s",
        note: "Elbow on inner thigh. Pure isolation, no momentum.",
      },
      {
        name: "Cable Curl",
        sets: 3,
        reps: "12–15",
        rest: "45s",
        note: "Keeps tension at the top unlike free weights.",
      },
      {
        name: "Reverse Curl",
        sets: 3,
        reps: "12",
        rest: "45s",
        note: "Overhand grip. Builds brachioradialis and forearms.",
      },
    ],
  },
  Wednesday: {
    muscle: "TRICEPS",
    icon: "⚡",
    color: "#FACC15",
    tip: "Triceps make up 2/3 of your arm size. Don't skip this day!",
    exercises: [
      {
        name: "Close-Grip Bench Press",
        sets: 4,
        reps: "8–10",
        rest: "90s",
        note: "Hands shoulder-width. Tuck elbows — best mass builder.",
      },
      {
        name: "Skull Crushers (EZ Bar)",
        sets: 3,
        reps: "10–12",
        rest: "75s",
        note: "Lower to forehead. Strong long-head stretch.",
      },
      {
        name: "Cable Tricep Pushdown",
        sets: 3,
        reps: "12–15",
        rest: "60s",
        note: "Lock elbows at sides. Full extension at bottom.",
      },
      {
        name: "Overhead Tricep Extension",
        sets: 3,
        reps: "12",
        rest: "60s",
        note: "Dumbbell or cable. Full overhead stretch is key.",
      },
      {
        name: "Tricep Dips (Bench)",
        sets: 3,
        reps: "10–12",
        rest: "60s",
        note: "Hands behind on bench. Elbows point back, not out.",
      },
      {
        name: "Single-arm Kickback",
        sets: 3,
        reps: "12–15 each",
        rest: "45s",
        note: "Hinge forward. Fully extend arm and squeeze hard.",
      },
      {
        name: "Diamond Push-ups",
        sets: 3,
        reps: "To failure",
        rest: "45s",
        note: "Finish with a tricep pump. Form over reps.",
      },
    ],
  },
  Thursday: {
    muscle: "LEGS",
    icon: "🦵",
    color: "#F43F5E",
    tip: "Legs grow fastest with consistency. Don't skip leg day — your upper body stability depends on it.",
    exercises: [
      {
        name: "Barbell Back Squat",
        sets: 4,
        reps: "8–10",
        rest: "120s",
        note: "King of all exercises. Depth: hip crease below knee.",
      },
      {
        name: "Romanian Deadlift (RDL)",
        sets: 3,
        reps: "10–12",
        rest: "90s",
        note: "Hip hinge. Feel the hamstring stretch. Spine neutral.",
      },
      {
        name: "Leg Press",
        sets: 3,
        reps: "10–12",
        rest: "75s",
        note: "Feet shoulder-width. Don't lock knees at the top.",
      },
      {
        name: "Walking Lunges",
        sets: 3,
        reps: "12 each leg",
        rest: "60s",
        note: "Controlled steps. Knee tracks over toes.",
      },
      {
        name: "Leg Extension",
        sets: 3,
        reps: "12–15",
        rest: "60s",
        note: "Quad isolation. Pause briefly at the top.",
      },
      {
        name: "Lying Leg Curl",
        sets: 3,
        reps: "12–15",
        rest: "60s",
        note: "Hamstring isolation. Curl all the way, lower slowly.",
      },
      {
        name: "Standing Calf Raises",
        sets: 4,
        reps: "15–20",
        rest: "45s",
        note: "Full range: stretch at bottom, peak contraction at top.",
      },
    ],
  },
  Friday: {
    muscle: "REST",
    icon: "😴",
    color: "#64748B",
    tip: "Growth happens during recovery, not in the gym. Sleep 7–9 hours and eat enough protein.",
    exercises: [],
  },
};

const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export default function WorkoutRoutine() {
  const [activeDay, setActiveDay] = useState("Saturday");
  const [checked, setChecked] = useState({});

  const day = workoutData[activeDay];
  const isRest = activeDay === "Friday";

  const toggleCheck = (key) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = day.exercises.filter(
    (_, i) => checked[`${activeDay}-${i}`]
  ).length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0C0C0F",
        fontFamily: "'Oswald', 'Georgia', sans-serif",
        color: "#F0EDE8",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0C0C0F; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

        .day-btn {
          cursor: pointer;
          border: none;
          background: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 8px 12px;
          border-radius: 10px;
          transition: all 0.2s ease;
          font-family: 'Oswald', sans-serif;
        }
        .day-btn:hover { background: rgba(255,255,255,0.05); }
        .day-btn.active {
          background: rgba(255,255,255,0.08);
        }
        .exercise-card {
          background: #161619;
          border: 1px solid #222;
          border-radius: 14px;
          padding: 18px 20px;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .exercise-card:hover {
          border-color: #333;
          transform: translateY(-1px);
        }
        .exercise-card.done {
          opacity: 0.5;
        }
        .exercise-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          border-radius: 3px 0 0 3px;
          background: var(--accent);
        }
        .check-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .check-btn.checked {
          background: var(--accent);
        }
        .badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          letter-spacing: 0.03em;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.4s ease;
        }
        .stat-box {
          background: #161619;
          border: 1px solid #222;
          border-radius: 12px;
          padding: 14px 18px;
          text-align: center;
        }
        .pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .day-scroll {
          overflow-x: auto;
          scrollbar-width: none;
        }
        .day-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Header */}
      <div
        style={{
          background: "linear-gradient(180deg, #111115 0%, #0C0C0F 100%)",
          borderBottom: "1px solid #1A1A1F",
          padding: "28px 24px 20px",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: `linear-gradient(135deg, ${day.color}33, ${day.color}11)`,
                border: `1px solid ${day.color}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
              }}
            >
              {day.icon}
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "#555",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                YOUR WORKOUT
              </div>
              <h1
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  color: "#F0EDE8",
                  lineHeight: 1,
                }}
              >
                {isRest ? "REST DAY" : day.muscle + " DAY"}
              </h1>
            </div>
          </div>

          {/* Profile chips */}
          <div
            style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}
          >
            {[
              ["Age", "20 yrs"],
              ["Weight", "67 kg"],
              ["Height", "175 cm"],
              ["Experience", "4 months"],
            ].map(([label, val]) => (
              <div
                key={label}
                style={{
                  background: "#1A1A1F",
                  border: "1px solid #252528",
                  borderRadius: 8,
                  padding: "5px 12px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  color: "#888",
                }}
              >
                <span style={{ color: "#555" }}>{label}: </span>
                <span style={{ color: "#CCC", fontWeight: 500 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Day Selector */}
      <div style={{ borderBottom: "1px solid #1A1A1F", background: "#0E0E12" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div className="day-scroll">
            <div
              style={{
                display: "flex",
                padding: "12px 16px",
                gap: 4,
                minWidth: "max-content",
              }}
            >
              {days.map((d) => {
                const isActive = d === activeDay;
                const acc = workoutData[d].color;
                return (
                  <button
                    key={d}
                    className={`day-btn ${isActive ? "active" : ""}`}
                    onClick={() => setActiveDay(d)}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        color: isActive ? acc : "#444",
                        transition: "color 0.2s",
                      }}
                    >
                      {d.slice(0, 3).toUpperCase()}
                    </span>
                    <span style={{ fontSize: 18 }}>{workoutData[d].icon}</span>
                    <span
                      style={{
                        fontSize: 9,
                        fontFamily: "'DM Sans', sans-serif",
                        color: isActive ? "#888" : "#333",
                        fontWeight: 500,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {workoutData[d].muscle}
                    </span>
                    {isActive && (
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: acc,
                          marginTop: 2,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{ maxWidth: 680, margin: "0 auto", padding: "24px 16px 40px" }}
      >
        {/* Tip Banner */}
        <div
          style={{
            background: `linear-gradient(135deg, ${day.color}15, ${day.color}05)`,
            border: `1px solid ${day.color}25`,
            borderRadius: 12,
            padding: "14px 18px",
            marginBottom: 24,
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
          }}
        >
          <div style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>💡</div>
          <div
            style={{
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
              color: "#BBBBBB",
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            <span style={{ color: day.color, fontWeight: 600 }}>
              Coach Tip:{" "}
            </span>
            {day.tip}
          </div>
        </div>

        {isRest ? (
          /* REST DAY */
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: 80, marginBottom: 24 }}>😴</div>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: "0.06em",
                marginBottom: 12,
                color: "#F0EDE8",
              }}
            >
              REST & RECOVER
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#555",
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: 400,
                margin: "0 auto 32px",
              }}
            >
              Your muscles grow during rest, not during training. Use today to
              recover, eat well, and sleep 7–9 hours.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                maxWidth: 360,
                margin: "0 auto",
              }}
            >
              {[
                ["🥩", "Protein Goal", "~134g / day"],
                ["💧", "Hydration", "3–4 L water"],
                ["🛌", "Sleep", "7–9 hours"],
                ["🧘", "Active Rest", "Light walk / stretch"],
              ].map(([icon, label, val]) => (
                <div key={label} className="stat-box">
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#444",
                      letterSpacing: "0.08em",
                      marginBottom: 4,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {label.toUpperCase()}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#BBB",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Progress Bar */}
            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: 13,
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#555",
                      fontWeight: 500,
                    }}
                  >
                    PROGRESS
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: "'DM Sans', sans-serif",
                      color: day.color,
                      fontWeight: 600,
                    }}
                  >
                    {completedCount}/{day.exercises.length} exercises
                  </span>
                </div>
                {completedCount === day.exercises.length && (
                  <span
                    style={{
                      fontSize: 12,
                      color: day.color,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    ✓ WORKOUT COMPLETE!
                  </span>
                )}
              </div>
              <div
                style={{
                  height: 6,
                  background: "#1A1A1F",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${(completedCount / day.exercises.length) * 100}%`,
                    background: `linear-gradient(90deg, ${day.color}, ${day.color}BB)`,
                  }}
                />
              </div>
            </div>

            {/* Stats Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 10,
                marginBottom: 24,
              }}
            >
              {[
                ["🔥", "Exercises", "7"],
                ["⏱️", "Est. Time", "55–70 min"],
                ["💧", "Rest Between", "45–120s"],
              ].map(([icon, label, val]) => (
                <div key={label} className="stat-box">
                  <div style={{ fontSize: 16, marginBottom: 4 }}>{icon}</div>
                  <div
                    style={{
                      fontSize: 9,
                      color: "#444",
                      letterSpacing: "0.08em",
                      marginBottom: 3,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {label.toUpperCase()}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#CCC",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {val}
                  </div>
                </div>
              ))}
            </div>

            {/* Exercise List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {day.exercises.map((ex, i) => {
                const key = `${activeDay}-${i}`;
                const done = !!checked[key];
                return (
                  <div
                    key={i}
                    className={`exercise-card ${done ? "done" : ""}`}
                    style={{ "--accent": day.color }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: 14,
                        alignItems: "flex-start",
                      }}
                    >
                      {/* Number */}
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          flexShrink: 0,
                          borderRadius: 8,
                          background: `${day.color}18`,
                          border: `1px solid ${day.color}30`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 700,
                          color: day.color,
                          marginTop: 1,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: 8,
                            marginBottom: 8,
                          }}
                        >
                          <h3
                            style={{
                              fontSize: 16,
                              fontWeight: 600,
                              letterSpacing: "0.03em",
                              color: done ? "#555" : "#F0EDE8",
                              lineHeight: 1.2,
                              textDecoration: done ? "line-through" : "none",
                            }}
                          >
                            {ex.name}
                          </h3>
                          <button
                            className={`check-btn ${done ? "checked" : ""}`}
                            style={{ "--accent": day.color }}
                            onClick={() => toggleCheck(key)}
                          >
                            {done && (
                              <span
                                style={{
                                  color: "#000",
                                  fontSize: 14,
                                  fontWeight: 700,
                                }}
                              >
                                ✓
                              </span>
                            )}
                          </button>
                        </div>

                        {/* Badges */}
                        <div
                          style={{
                            display: "flex",
                            gap: 6,
                            flexWrap: "wrap",
                            marginBottom: 10,
                          }}
                        >
                          <span
                            className="badge"
                            style={{
                              background: `${day.color}18`,
                              color: day.color,
                              border: `1px solid ${day.color}30`,
                            }}
                          >
                            {ex.sets} sets
                          </span>
                          <span
                            className="badge"
                            style={{
                              background: "#1E1E22",
                              color: "#AAA",
                              border: "1px solid #2A2A2E",
                            }}
                          >
                            {ex.reps} reps
                          </span>
                          <span
                            className="badge"
                            style={{
                              background: "#1E1E22",
                              color: "#666",
                              border: "1px solid #2A2A2E",
                            }}
                          >
                            Rest {ex.rest}
                          </span>
                        </div>

                        {/* Note */}
                        <p
                          style={{
                            fontSize: 12,
                            fontFamily: "'DM Sans', sans-serif",
                            color: "#555",
                            lineHeight: 1.55,
                            fontWeight: 400,
                          }}
                        >
                          {ex.note}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div
              style={{
                marginTop: 28,
                padding: "18px 20px",
                background: "#161619",
                border: "1px solid #222",
                borderRadius: 14,
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div style={{ fontSize: 28 }}>🥩</div>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#CCC",
                    marginBottom: 3,
                    letterSpacing: "0.04em",
                  }}
                >
                  POST-WORKOUT NUTRITION
                </div>
                <p
                  style={{
                    fontSize: 12,
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#555",
                    lineHeight: 1.5,
                  }}
                >
                  Aim for <span style={{ color: "#CCC" }}>~30–40g protein</span>{" "}
                  within 60 min post-workout. Daily goal:{" "}
                  <span style={{ color: "#CCC" }}>~134g protein</span> (2× your
                  weight in kg).
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
