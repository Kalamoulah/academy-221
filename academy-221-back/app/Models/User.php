<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    // protected $fillable = [
    //     'name',
    //     'email',
    //     'password',

    // ];

    protected $guarded= [
       'id'
    ];



    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    // public function module() :BelongsToMany
    // {
    //     return $this->belongsToMany(Module::class, 'module_professeurs');
    // }

    public function module(): BelongsToMany
    {
        return $this->belongsToMany(Module::class, 'module_professeurs', 'professeur_id');
    }

    public function inscriptions()
    {
        return $this->belongsToMany(Inscription::class);
    }

    public static function getByRole($role)
    {
        return self::where('role', $role)->get();
    }
}
