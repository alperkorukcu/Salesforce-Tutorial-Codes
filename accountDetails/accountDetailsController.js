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
        
        var result = $A.enqueueAction(action);
        console.log(result);
        
        var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "title": "Success!",
        "message": "New account added.",
        "type": "success"
    });
    toastEvent.fire();
        
        
	},
    refresh : function(component, event, helper) {
        var action = component.get("c.insertAcc");
        
        action.setCallback(this, function(response){
            var accountList = response.getReturnValue();
            component.set("v.accountList", accountList);            
        });
		console.log("refresh");        
        $A.enqueueAction(action);
    }
    
    
})