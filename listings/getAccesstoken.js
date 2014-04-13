public function getAccessToken() { 
	...
	$this->accessToken= $this->getApplicationAccessToken();
	$user_access_token = $this->getUserAccessToken();
	if ($user_access_token) {
		$this->accessToken=$user_access_token;
	}
	return $this->accessToken;
}
