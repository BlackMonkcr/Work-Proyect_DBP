package com.example.workpryct_dbp;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import com.example.workpryct_dbp.Services.*;
import com.example.workpryct_dbp.Application.*;
import com.example.workpryct_dbp.Domain.*;

@SpringBootTest
class WorkPryctDbpApplicationTests {
	// Plan Service & Controller
	@Mock
	private PlanService planService;
	@InjectMocks
	private PlanController planController;

	// Subscription Service & Controller
	@Mock
	private SubscriptionService subscriptionService;
	@InjectMocks
	private SubscriptionController subscriptionController;

	// Img Service & Controller
	@Mock
	private ImgService imgService;
	@InjectMocks
	private ImgController imgController;

	// ImgUpload Service & Controller
	@Mock
	private ImgUploadService imgUploadService;
	@InjectMocks
	private ImgUploadController imgUploadController;

	// User Service & Controller
	@Mock
	private UserService userService;
	@InjectMocks
	private UserController userController;

	// Test for Plan
	@Test
	void getAllPlansTest() {
		ResponseEntity<List<Plan>> response = planController.getAllPlans();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(0, response.getBody().size());

		List<Plan> plans = new ArrayList<>();
		plans.add(new Plan("work+", 15.99, "description 1"));
		plans.add(new Plan("work++", 25.99, "description 2"));
		plans.add(new Plan("++work++", 55.99, "description 3"));
		when(planService.getAllPlans()).thenReturn(plans);

		response = planController.getAllPlans();

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals(3, response.getBody().size());
		assertEquals("work+", response.getBody().get(0).getName());
		assertEquals(25.99, response.getBody().get(1).getPrice());
		assertEquals("description 3", response.getBody().get(2).getDescription());
	}

	@Test
	void getPlanByIdTest() {
		ResponseEntity<Plan> response = planController.getPlanById(1L);

		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
		assertEquals(null, response.getBody());

		Plan plan = new Plan("work+", 15.99, "description 1");
		when(planService.getPlanById(1L)).thenReturn(java.util.Optional.of(plan));

		response = planController.getPlanById(1L);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("work+", response.getBody().getName());
		assertEquals(15.99, response.getBody().getPrice());
		assertEquals("description 1", response.getBody().getDescription());
	}

	@Test
	void getPlanByNameTest() {
		ResponseEntity<Plan> response = planController.getPlanByName("work+");

		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
		assertEquals(null, response.getBody());

		Plan plan = new Plan("work+", 15.99, "description 1");
		when(planService.getPlanByName("work+")).thenReturn(java.util.Optional.of(plan));

		response = planController.getPlanByName("work+");

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("work+", response.getBody().getName());
		assertEquals(15.99, response.getBody().getPrice());
		assertEquals("description 1", response.getBody().getDescription());
	}

	@Test
	void createPlanTest() {
		Plan plan = new Plan("work+", 15.99, "description 1");
		when(planService.createPlan(plan)).thenReturn(plan);

		ResponseEntity<Plan> response = planController.createPlan(plan);

		assertEquals(HttpStatus.CREATED, response.getStatusCode());
		assertEquals("work+", response.getBody().getName());
		assertEquals(15.99, response.getBody().getPrice());
		assertEquals("description 1", response.getBody().getDescription());
	}

	@Test
	void updatePlanTest() {
		Plan plan = new Plan("work+", 15.99, "description 1");
		when(planService.updatePlan(2L, plan)).thenReturn(null);

		ResponseEntity<Plan> response = planController.updatePlan(2L, plan);

		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
		assertEquals(null, response.getBody());

		Plan plan2 = new Plan("work++", 25.99, "description 2");
		when(planService.getPlanById(2L)).thenReturn(java.util.Optional.of(plan2));

		Plan plan3 = new Plan("++work++", 55.99, "description 3");
		when(planService.updatePlan(2L, plan3)).thenReturn(plan3);

		response = planController.updatePlan(2L, plan3);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("++work++", response.getBody().getName());
		assertEquals(55.99, response.getBody().getPrice());
		assertEquals("description 3", response.getBody().getDescription());
	}

	@Test
	void patchPlanPriceTest() {
		Plan plan = new Plan("work+", 15.99, "description 1");
		when(planService.patchPlanPrice(2L, plan)).thenReturn(null);

		ResponseEntity<Plan> response = planController.patchPlan(2L, plan);

		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
		assertEquals(null, response.getBody());

		Plan plan2 = new Plan("work++", 25.99, "description 2");
		when(planService.getPlanById(2L)).thenReturn(java.util.Optional.of(plan2));

		Plan plan3 = new Plan("work++", 55.99, "description 2");
		when(planService.patchPlanPrice(2L, plan3)).thenReturn(plan3);

		response = planController.patchPlan(2L, plan3);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("work++", response.getBody().getName());
		assertEquals(55.99, response.getBody().getPrice());
		assertEquals("description 2", response.getBody().getDescription());
	}

	@Test
	void deletePlanTest() {
		ResponseEntity<String> response = planController.deletePlan(1L);

		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
		assertEquals(null, response.getBody());

		Plan plan = new Plan("work+", 15.99, "description 1");
		when(planService.getPlanById(1L)).thenReturn(java.util.Optional.of(plan));

		response = planController.deletePlan(1L);

		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertEquals("Deleted!", response.getBody());
	}
}
