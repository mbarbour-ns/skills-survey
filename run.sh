nohup node appsrc/SkillsSurvey_startSiteService.js port $PORT_SkillsSurvey > __SkillsSurvey.log &
echo Running Skills Survey
ps -ef | grep appsrc