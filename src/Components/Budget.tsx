import React, { useState, useEffect, useCallback } from "react";

interface BudgetProps {
  setTargetSaving: (value: number) => void;
  targetSaving: number;
  savingAmount: number;
}

const Budget: React.FC<BudgetProps> = ({
  setTargetSaving,
  targetSaving,
  savingAmount,
}) => {
  const [savingPercentage, setSavingPercentage] = useState<number>(0);

  useEffect(() => {
    const percentage = targetSaving ? (savingAmount / targetSaving) * 100 : 0;
    setSavingPercentage(percentage);
  }, [targetSaving, savingAmount]);

  const handleResetProgress = useCallback(() => {
    setTargetSaving(0);
  }, [setTargetSaving]);

  return (
    <div>
      <h1>Budget Component</h1>
      <div className="target-saving-container">
        <label htmlFor="target-saving">Set Target:</label>
        <input
          type="number"
          id="target-saving"
          value={targetSaving}
          onChange={(e) => setTargetSaving(parseFloat(e.target.value))}
        />
        <p>Target: {targetSaving}</p>
      </div>
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${savingPercentage}%` }}
          ></div>
        </div>
        <span>{savingPercentage.toFixed(2)}%</span>
        <button onClick={handleResetProgress}>Reset</button>
      </div>
    </div>
  );
};

export default Budget;
