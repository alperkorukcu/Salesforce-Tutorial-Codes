({
	getInput : function(component, event, helper) {
       console.log('getInput');
        var action = component.get("c.insertAcc");
        
        action.setParams({
            name: component.get("v.inName"),
            tarih: component.get("v.inDate")
        });
        
        action.setCallback(this, function(response){
            var accountList = response.getReturnValue();
            component.set("v.accountList", accountList);
        });
        
        $A.enqueueAction(action);
        
        
	},
    	handleSuccess : function(component, event, helper) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Success!",
        "message": "The property's info has been updated.",
        "type": "success"
    });
    toastEvent.fire();
}
    
})