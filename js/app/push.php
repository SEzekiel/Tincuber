
function pushNotification(){

// Push The notification with parameters
require_once('PushBots.class.php');
$pb = new PushBots();
// Application ID
$appID = '59c17f184a9efa90928b456a';
// Application Secret
$appSecret = 'f62be525983103d5d23ccc4a539589fc';
$pb->App($appID, $appSecret);
$pb->Platform(array("0","1"));
$pb->Badge("+2");
// Notification Settings
$pb->Alert("Heads up! An Uber is on its way to campus");
$pb->Push();


}