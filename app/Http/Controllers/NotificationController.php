<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(){
        return [
            'read' => NotificationResource::collection(auth()->user()->readNotifications),
            'unread' => NotificationResource::collection(auth()->guard('api')->user()->unreadNotifications)
        ];
    }

    public function markAsRead(Request $request){
        auth()->user()->notifications->where('id', $request->id)->markAsRead();
    }
}
