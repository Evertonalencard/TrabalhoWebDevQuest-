import { useXP } from "../Context/XPContext";
import "../css/XPBar.css";

function XPBar() {
  const { xp, level, xpPercent, xpInCurrentLevel, XP_PER_LEVEL } = useXP();

  return (
    <div className="xp-bar-wrapper">
      <div className="xp-bar-info">
        <span className="xp-level-badge">Nível {level}</span>
        <span className="xp-label">
          {xpInCurrentLevel} / {XP_PER_LEVEL} XP
        </span>
        <span className="xp-total">Total: {xp} XP</span>
      </div>
      <div className="xp-bar-track">
        <div
          className="xp-bar-fill"
          style={{ width: `${xpPercent}%` }}
          role="progressbar"
          aria-valuenow={xpInCurrentLevel}
          aria-valuemin={0}
          aria-valuemax={XP_PER_LEVEL}
          aria-label={`XP: ${xpInCurrentLevel} de ${XP_PER_LEVEL}`}
        />
      </div>
    </div>
  );
}

export default XPBar;
