//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class foodStorage
    {
        public string id { get; set; }
        public string name { get; set; }
        public string location { get; set; }
        public Nullable<byte> amount { get; set; }
        public Nullable<byte> persons { get; set; }
        public Nullable<System.DateTime> dateStorage { get; set; }
        public bool present { get; set; }
        public Nullable<System.DateTimeOffset> createdAt { get; set; }
        public Nullable<System.DateTimeOffset> updatedAt { get; set; }
        public Nullable<System.DateTimeOffset> deletedAt { get; set; }
        public bool isDeleted { get; set; }
    }
}