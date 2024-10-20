"use client"
import React, { useState } from "react";
import styles from './style.module.scss';
import Lottie from "lottie-react";
import anime from './Animation - 1728926650942.json';


  



export default function BMI(){
    const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [bmr, setBmr] = useState(null);
  const [calories, setCalories] = useState(null);
  const [negvalues,setnegvalues] =useState(false);
  const calculateBMR = () => {
    let bmrValue;
    if(age<=0 || weight <=0 || height <=0){
      setnegvalues(true);
    } 
    else{
      setnegvalues(false);
    if (gender === "male") {
      bmrValue = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else {
      bmrValue = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }

    setBmr(bmrValue);
    calculateCalories(bmrValue);
  }
  };

  const calculateCalories = (bmrValue) => {
    let calorieNeeds;

    switch (activityLevel) {
      case "sedentary":
        calorieNeeds = bmrValue * 1.2;
        break;
      case "light":
        calorieNeeds = bmrValue * 1.375;
        break;
      case "moderate":
        calorieNeeds = bmrValue * 1.55;
        break;
      case "active":
        calorieNeeds = bmrValue * 1.725;
        break;
      case "very active":
        calorieNeeds = bmrValue * 1.9;
        break;
      default:
        calorieNeeds = bmrValue * 1.2;
    }

    setCalories(calorieNeeds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMR();
  };
    
  return (<>
    <div className={styles.smallscreen}>
      <div className={styles.mainpage}>
       {/* <h2 className={styles.header}>BMR Calculator</h2> */}
        {/* Changed to <h1> as per your request */}
        
        <div className={styles.card}>
        <div className={styles.lottie}>
            <Lottie animationData={anime}></Lottie>
        </div>
    <div className={styles.bmrcalculator}>
    
      <form onSubmit={handleSubmit}>
        <div className={styles.formgroup}>
          <label>Age:</label>   
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          
        </div>

        <div className={styles.formgroup}>
          <label>Gender:</label> <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select> 
          
        </div>

        <div className={styles.formgroup}>
          <label>Weight (kg):</label><input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          
        </div>

        <div className={styles.formgroup}>
          <label>Height (cm):</label>  <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
          
        </div>

        <div className={styles.formgroup}>
          <label>Activity Level: </label> <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Light (light exercise/sports 1-3 days/week)</option>
            <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
            <option value="active">Active (hard exercise 6-7 days a week)</option>
            <option value="very active">
              Very Active (very hard exercise or a physical job)
            </option>
          </select>
          
        </div>

        <button type="submit" className={styles.btn}>CALCULATE BMR</button>
      </form>
      {negvalues &&(
        <div className={styles.results}>
        <span className={styles.he}>ENTER POSITIVE VALUES ONLY</span><br/>
        for age, weight and height
        
      </div>
      )}
      {bmr && (
        <div className={styles.results}>
          <span className={styles.he}>YOUR BMR:</span> {bmr.toFixed(2)} calories/day <br/><br/>
          <span className={styles.ha}>
            Estimated Calorie Needs (based on activity level):{" "}</span>
            {calories.toFixed(2)} calories/day
          
        </div>
      )}
    </div>
    </div>
    </div>
    </div>
    <div className={styles.bigscreen}>
    <div className={styles.mainpage}>
       {/* <h2 className={styles.header}>BMR Calculator</h2> */}
        {/* Changed to <h1> as per your request */}
        
        <div className={styles.card}>
        <div className={styles.lottie}>
            <Lottie animationData={anime}></Lottie>
        </div>
    <div className={styles.bmrcalculator}>
    
      <form onSubmit={handleSubmit}>
        <div className={styles.formgroup}>
          <label>Age:   <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          /></label>
          
        </div>

        <div className={styles.formgroup}>
          <label>Gender: <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select> </label>
          
        </div>

        <div className={styles.formgroup}>
          <label>Weight (kg):<input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          /></label>
          
        </div>

        <div className={styles.formgroup}>
          <label>Height (cm):  <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          /></label>
          
        </div>

        <div className={styles.formgroup}>
          <label>Activity Level:  <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
          >
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="light">Light (light exercise/sports 1-3 days/week)</option>
            <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
            <option value="active">Active (hard exercise 6-7 days a week)</option>
            <option value="very active">
              Very Active (very hard exercise or a physical job)
            </option>
          </select></label>
          
        </div>

        <button type="submit" className={styles.btn}>CALCULATE BMR</button>
      </form>
      {negvalues &&(
        <div className={styles.results}>
        <span className={styles.he}>ENTER POSITIVE VALUES ONLY</span><br/>
        for age, weight and height
        
      </div>
      )}
      {bmr && (
        <div className={styles.results}>
          <span className={styles.he}>YOUR BMR:</span> {bmr.toFixed(2)} calories/day <br/><br/>
          <span className={styles.ha}>
            Estimated Calorie Needs (based on activity level):{" "}</span>
            {calories.toFixed(2)} calories/day
          
        </div>
      )}
    </div>
    </div>
    </div>
    </div></>
  );
};



