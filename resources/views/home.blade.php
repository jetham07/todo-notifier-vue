@extends('layouts.app')

@section('content')
<div class="container">
	<router-view></router-view>
</div>
@endsection
<style>
	.body {
		background-color: #21D4FD;
		background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);

	}
</style>
<script>
    window.auth_user = {!! json_encode($auth_user); !!};
</script>
