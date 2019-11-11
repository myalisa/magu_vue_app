<template>
  <div class="container">
    <div class="row portfolio-item">
      <div class="col-md-8">

          
          <h1>Treatments by Symptom</h1>
          <br>
          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden = !isHidden">PMS</button>
          <br>
          <p v-if="!isHidden">To combat the change in hormones, it is suggested to exercise more often, eat more fruits, vegetables, and whole grains, and to sleep well. A strain with high levels of CBD not only relieves feelings of anxiousness and anxiety, but also serves as a natural sleep aid to assure your body is getting enough time to recover from stress</p>
  
          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden2 = !isHidden2">Anxiety</button>
          <br>
          <p v-if="!isHidden2">Women who experience anxiety as a symptom of their period will want to use a CBD-heavy strain to balance the endocannabinoid system to relax the mind and body without causing additional paranoia or anxiousness.</p>
          
          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden3 = !isHidden3">Mood Swings</button>
          <br>
          <p v-if="!isHidden3">Mood swings occur during the menstruation cycle as an effect of changing hormones, and can be managed with the inclusion of a CBD-heavy strain combined with frequent exercise and attention to dietary needs.</p>
          
          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden4 = !isHidden4">Muscle Soreness</button>
            <br>
          <p v-if="!isHidden4">CBD is known to ease inflammation and soreness of muscles. Consuming a CBD-heavy strain or applying a topical to sore muscles will relieve pain and muscle spasms.</p>
          
          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden5 = !isHidden5">Migraines</button>
          <br>
          <p v-if="!isHidden5">Migraines during menstruation are often result of a drop in estrogen just before your period starts. THC-heavy strains combat migraine pain and frequency and can be more effective than a dose of anti-inflammatory. Strains with high CBD levels relieve chronic migraine pain and throbbing.</p>
          
          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden6 = !isHidden6">Insomnia</button>
          <br>
          <p v-if="!isHidden6">Insomnia occurs during menstruation as a result of a drop in hormones, particularly in the luteal phase of menstruation. Women experience less REM sleep during this phase of their cycle, which can lead to irritability and fatigue throughout the day. To combat this symptom, a THC-heavy strain provides intense relaxing effects that will have you sound asleep.</p>
          
          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden7 = !isHidden7">Menstrual Cramps</button>
          <br>
          <p v-if="!isHidden7">Menstrual cramps can occur during the days right after ovulation to the last days of your period, and the pain caused from muscle contraction can occur in the lower abdomen and back. High THC-level strains possess intense pain-fighting properties and also promote relaxation and recovery of the reproductive organs.</p>
          
          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden8 = !isHidden8">Nausea</button>
          <br>
          <p v-if="!isHidden8">Nausea is a common symptom that many women experience during menstruation and is typically not a cause for concern. To treat Nausea, it is suggested to consume strains with high levels of THC which eliminate feelings of dizziness and nausea. These THC-heavy strains will also trigger the ultimate body high.</p>
          

          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden9 = !isHidden9">Depression</button>
          <br>
          <p v-if="!isHidden9">Depression can occur in women from the earliest days of menstruation to the perimenopausal period at mid-life. Women who experience depression as a recurring symptom of their period should consider consuming a 1:1 ratio strain with near equal levels of THC and CBD to balance the endocannabinoid system in their bodies, naturally increase their serotonin levels, and provide energy to take on their daily lives.</p>

          
          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden10 = !isHidden10">Fatigue</button>
          <br>
          <p v-if="!isHidden10">Many women express fatigue as a common symptom of menstruation and the most difficult symptom to combat. Strains with a 1:1 ratio of CBD to THC leave the body feeling relaxed, yet energetic.</p>

          
          <button type="button" class="btn btn-default btn-lg btn-block" v-on:click="isHidden11 = !isHidden11">Digestive Issues</button>
          <br>
          <p v-if="!isHidden11">Bloating, cramping, loose stool, and constipation are all common symptoms during the menstruation cycle. The bodys gastrointestinal tract contains cannabinoid receptors and irritability in the bowel can best be relieved with strains containing equal amounts of CBD and THC leaving the bowel relaxed without causing drowsiness.</p>
      
      </div>
      <div class="col-md-4">
        <article class="content">
          <img src="/images/ovaries.jpg">
          <br>

          <p>Everyone experiences different symptoms throughout their menstrual cycle, and not all require the same medical treatment using cannabis. Vestibulum maximus nunc et velit semper,</p>
          <br>
          <img src="/images/missgrass.jpeg">
          <br>
          <br>
          <a href="https://www.missgrass.com/"><button type="button" class="btn btn-primary btn-lg">Miss Grass</button></a>
          <br>
          <br>
          <img src="/images/foria.png">
          <br>
          <a href="https://www.foriawellness.com/blogs/learn/balancing-your-endocannabinoid-system"><button type="button" class="btn btn-primary btn-lg">Foria Wellness</button></a>
          <br>
          <br>
          <br>
          <img src="/images/marysmedicinals.jpg">
          <br>

          <br>
          <a href="https://marysmedicinals.com/"><button type="button" class="btn btn-primary btn-lg">Mary's Medicinals</button></a>

        </article>
      </div>
    </div>
   
    
  </div>

  
</template>

<style>
</style>

<script>
    var axios = require('axios');
    export default {
      data: function() {
        return {
          symptoms: [],
          isHidden: true,
          isHidden2: true,
          isHidden3: true,
          isHidden4: true,
          isHidden5: true,
          isHidden6: true,
          isHidden7: true,
          isHidden8: true,
          isHidden9: true,
          isHidden10: true,
          isHidden11: true

        };
      },
      created: function() {
        axios
          .get("/api/symptoms")
          .then(response => {
            this.symptoms = response.data;
          });
      },
      methods: {}
    };
</script>