protected function getUserFromAvailableData() {
	if ($signed_request) {
		...
		$this->setPersistentData('user_id', 
			$signed_request['user_id']);
		return 0;
	}
	$user = $this->getPersistentData('user_id', $default = 0);
	$persist_token = $this->getPersistentData('access_token');
	$access_token = $this->getAccessToken();
	if ($access_token && 
		!($user && $persist_token == $access_token)) { 
		$user = $this->getUserFromAccessToken();
		if ($user) 
		$this->setPersistentData('user_id', $user);
		else $this->clearAllPersistentData(); 
    }
    return $user;  
}

public function getLogoutUrl() {
	return $this->getUrl(
		'www',  'logout.php',
		array_merge(array(
		'next' => $this->getCurrentUrl(),
		'access_token' => $this->getAccessToken(),),...));
}
